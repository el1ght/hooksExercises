import Collapse from "../components/common/collapse";
import React from "react";
import HOCExample from "../components/examples/hoc/hocExample";
import CardWrapper from "../components/common/Card";
import HocExercise from "../components/exercises/hocExercise";
import BlockQuoteWrapper from "../components/common/blockQuote";
import Title from "../components/common/typografy/title";
import Subtitle from "../components/common/typografy/subtitle";
import Divider from "../components/common/divider";
const HOCLayout = () => {
    return (
        <>
            <Title>HOC</Title>
            <Collapse title="Информация">
                <BlockQuoteWrapper>
                    <p>
                        Компонент высшего порядка (Higher-Order Component, HOC)
                        — это один из продвинутых способов для повторного
                        использования логики. HOC не являются частью API React,
                        но часто применяются из-за композиционной природы
                        компонентов.
                        <br />
                        Говоря просто, компонент высшего порядка — это функция,
                        которая принимает компонент и возвращает новый
                        компонент.
                    </p>

                    <figcaption className="blockquote-footer">
                        <cite title="reactjs.org">reactjs.org</cite>
                    </figcaption>
                </BlockQuoteWrapper>
            </Collapse>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i> add{" "}
                <code>&quot;react/display-name&quot;: &quot;off&quot;</code> to
                EsLint rules
            </CardWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>
            <HOCExample />
            <Divider />
            <Subtitle>Упражнения</Subtitle>
            <HocExercise />
        </>
    );
};
export default HOCLayout;
