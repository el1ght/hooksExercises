import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import api from "../../../api";
import FormComponent, { TextField, SelectField } from "../../common/form";

const EditUserPage = () => {
    const { userId } = useParams();
    const history = useHistory();
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        profession: ""
    });
    const [professions, setProfession] = useState([]);

    const getProfessionById = (id) => {
        for (const prof in professions) {
            const profData = professions[prof];
            if (profData._id === id) return profData;
        }
    };

    const handleSubmit = (data) => {
        const { profession } = data;
        api.users
            .update(userId, {
                ...data,
                profession: getProfessionById(profession)
            })
            .then((data) => history.push(`/users/${data._id}`));
        console.log(data);
    };

    useEffect(() => {
        setIsLoading(true);
        api.users.getById(userId).then(({ profession, ...data }) =>
            setData((prevState) => ({
                ...prevState,
                ...data,
                profession: profession._id
            }))
        );
        api.professions.fetchAll().then((data) => setProfession(data));
    }, []);
    useEffect(() => {
        if (data._id) setIsLoading(false);
    }, [data]);

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        name: {
            isRequired: {
                message: "Введите ваше имя"
            }
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4">
                    {!isLoading && Object.keys(professions).length > 0 ? (
                        <FormComponent
                            onSubmit={handleSubmit}
                            validatorConfig={validatorConfig}
                            defaultData={data}
                        >
                            <TextField label="Имя" name="name" autoFocus />
                            <TextField label="Электронная почта" name="email" />
                            <SelectField
                                label="Выбери свою профессию"
                                defaultOption="Choose..."
                                options={professions}
                                name="profession"
                            />
                            <button
                                type="submit"
                                className="btn btn-primary w-100 mx-auto"
                            >
                                Обновить
                            </button>
                        </FormComponent>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditUserPage;
