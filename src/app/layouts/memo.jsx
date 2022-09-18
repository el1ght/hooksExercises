import React from "react";
import CollapseWrapper from "../components/common/collapse";
import CardWrapper from "../components/common/Card";
import MemoWithUseCallbackExample from "../components/examples/memo/memoWithUseCallbackExample";
import { Link } from "react-router-dom";
import MemoDependencyFunctionExample from "../components/examples/memo/memoDependencyFunctionExample";
import BlockQuoteWrapper from "../components/common/blockQuote";
import Title from "../components/common/typografy/title";
import Divider from "../components/common/divider";
import Subtitle from "../components/common/typografy/subtitle";
import SmallTitle from "../components/common/typografy/smallTitle";
const MemoExample = () => {
    return (
        <>
            <Title>React.Memo</Title>
            <CollapseWrapper>
                <BlockQuoteWrapper>
                    <p>
                        <code>React.Memo</code> - это higher order component.
                        <br />
                        Если ваш компонент всегда рендерит одно и то же при
                        неменяющихся пропсах, вы можете обернуть его в вызов
                        React.memo для повышения производительности в некоторых
                        случаях, мемоизируя тем самым результат. Это значит, что
                        React будет использовать результат последнего рендера,
                        избегая повторного рендеринга.
                        <br />
                        Говоря просто, компонент высшего порядка — это функция,
                        которая принимает компонент и возвращает новый
                        компонент.
                    </p>

                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuoteWrapper>
            </CollapseWrapper>

            <CollapseWrapper title="Когда использовать">
                <SmallTitle>Если компонент</SmallTitle>
                <ul>
                    <li>Часто ререндерится</li>
                    <li>
                        Компоненту передаются одинаковые параметры при
                        нескольких ререндерах
                    </li>
                    <li> Не имеет собственного состояния</li>
                </ul>
            </CollapseWrapper>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i> Если функциональный
                компонент обёрнут в <code>React.memo</code> и использует{" "}
                <code>useState, useReducer или useContext</code>, он будет
                повторно рендериться при изменении состояния или контекста.
            </CardWrapper>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i> Функциональный объект равен
                только самому себе
            </CardWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>
            <CardWrapper>
                <SmallTitle>Memo with useCallback</SmallTitle>
                <MemoWithUseCallbackExample />
            </CardWrapper>
            <CardWrapper>
                {" "}
                <SmallTitle>Memo dependency function</SmallTitle>
                <CardWrapper>
                    <i className="bi bi-lightbulb"></i> Если функция для сверки
                    не задана, то выполняется поверхностная сверка по{" "}
                    <Link
                        to={{
                            pathname:
                                "https://github.com/facebook/react/blob/v16.8.6/packages/shared/shallowEqual.js"
                        }}
                        target="_blank"
                    >
                        стандартному алгоритму
                    </Link>
                </CardWrapper>
                <MemoDependencyFunctionExample />
            </CardWrapper>
        </>
    );
};

export default MemoExample;
