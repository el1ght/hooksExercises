import React from "react";
import BlockQuote from "../components/common/blockQuote";
import CardWrapper from "../components/common/Card";
import CollapseWrapper from "../components/common/collapse";
import Divider from "../components/common/divider";
import SmallTitle from "../components/common/typografy/smallTitle";
import Subtitle from "../components/common/typografy/subtitle";
import Title from "../components/common/typografy/title";
import CloneElementExample from "../components/examples/cloneElement/cloneElementExample";
const CloneElement = () => {
    return (
        <>
            <Title>React.cloneElement</Title>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        Клонирует и возвращает новый React элемент, используя
                        элемент в качестве отправной точки. config должен
                        содержать все новые пропсы, key, а также ref. Полученный
                        элемент будет иметь пропсы исходного элемента, а новые
                        пропсы будут поверхностно слиты воедино. Новые дочерние
                        элементы заменят существующие. key и ref из исходного
                        элемента будут сохранены, если в config не было передано
                        key and ref.
                    </p>

                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i>{" "}
                <code>
                    React.cloneElement( element, [config], [...children] )
                </code>
            </CardWrapper>
            <CollapseWrapper title="Когда использовать">
                <SmallTitle>Если</SmallTitle>
                <ul>
                    <li>Невозможно изменить параметры</li>
                    <li>Необходимо изменить или добавить параметры</li>
                </ul>
            </CollapseWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>
            <CloneElementExample />
        </>
    );
};

export default CloneElement;
