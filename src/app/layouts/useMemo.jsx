import React from "react";
import CollapseWrapper from "../components/common/collapse";
import ComplexCalculateExample from "../components/examples/useMemo/complexCalculate";
import BlockQuote from "../components/common/blockQuote";
import Title from "../components/common/typografy/title";
import Subtitle from "../components/common/typografy/subtitle";
import Divider from "../components/common/divider";
const UseMemoExample = () => {
    return (
        <>
            <Title>useMemo</Title>
            <CollapseWrapper title="Mемоизация">
                <BlockQuote>
                    <p className="mt-2">
                        Мемоизация (англ. memoization от англ. memory и англ.
                        optimization) — в программировании сохранение
                        результатов выполнения функций для предотвращения
                        повторных вычислений. Это один из способов оптимизации,
                        применяемый для увеличения скорости выполнения
                        компьютерных программ. Перед вызовом функции
                        проверяется, вызывалась ли функция ранее:
                    </p>
                    <ul>
                        <li>
                            если не вызывалась, то функция вызывается, и
                            результат её выполнения сохраняется;
                        </li>
                        <li>
                            если вызывалась, то используется сохранённый
                            результат.
                        </li>
                    </ul>
                    <figcaption className="blockquote-footer">
                        <cite title="Wiki">Wiki</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <CollapseWrapper>
                <BlockQuote>
                    <p>
                        <code>useMemo</code> Возвращает мемоизированное значение
                    </p>
                    <p>
                        Передайте «создающую» функцию и массив зависимостей.
                        useMemo будет повторно вычислять мемоизированное
                        значение только тогда, когда значение какой-либо из
                        зависимостей изменилось. Эта оптимизация помогает
                        избежать дорогостоящих вычислений при каждом рендере.
                    </p>
                    <figcaption>
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuote>
            </CollapseWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>
            <ComplexCalculateExample />
        </>
    );
};

export default UseMemoExample;
