import React from "react";
import BlockQuoteWrapper from "../components/common/blockQuote";
import CardWrapper from "../components/common/Card";

import CollapseWrapper from "../components/common/collapse";
import Divider from "../components/common/divider";
import Subtitle from "../components/common/typografy/subtitle";
import ReactChildrenExample from "../components/examples/children/reactChildrenExample";
import ChildrenExercise from "../components/exercises/childrenExercise";
const ReactChildren = () => {
    return (
        <>
            <h1>Children</h1>

            <CollapseWrapper title="Что такое Children">
                <figure>
                    <blockquote>
                        <p className="mt-3">
                            <code> props.children </code>- Это объект,
                            содержащий описание детей.
                        </p>
                        <p>
                            <code>children</code> - не настоящие дети, не
                            компоненты, это описание содержания детей. Mы не
                            можем изменять какие-либо параметры или
                            редактировать какие-либо функции. Мы имеем доступ
                            только к чтению.
                        </p>
                    </blockquote>
                </figure>
            </CollapseWrapper>

            <CollapseWrapper title="React.children">
                <figure>
                    <blockquote>
                        <p className="mt-3">
                            <code>React.Children</code> - это утилита,
                            предоставляемая React, которая предоставляет функции
                            для работы с непрозрачной структурой данных
                            this.props.children.
                        </p>
                    </blockquote>
                </figure>
            </CollapseWrapper>
            <CardWrapper>
                <i className="bi bi-lightbulb"></i>Если <code>children</code> —
                это <code>Fragment</code>, он будет рассматриваться как целый
                потомок, а элементы внутри не будут пройдены.
            </CardWrapper>

            <CollapseWrapper title="React.children Functions">
                <CollapseWrapper title="React.Children.map">
                    <BlockQuoteWrapper>
                        <p className="mt-3">
                            <code>
                                React.Children.map(children,
                                function[(thisArg)])
                            </code>
                            <br />
                            Вызывает функцию для каждого непосредственного
                            потомка, содержащегося в children, передавая их по
                            очереди в thisArg. Если children — это массив, он
                            будет пройден, и функция будет вызвана для каждого
                            потомка в массиве. Если children равен null или
                            undefined, этот метод вернёт null или undefined, а
                            не массив.
                        </p>
                        <p></p>
                    </BlockQuoteWrapper>
                </CollapseWrapper>
                <CollapseWrapper title="React.Children.count">
                    <BlockQuoteWrapper>
                        <p className="mt-3">
                            <code>React.Children.count(children)</code>
                            <br />
                            Возвращает общее количество компонентов в children,
                            равное количеству вызовов callback, переданного в
                            React.Children.map, которые будут совершены.
                        </p>
                    </BlockQuoteWrapper>
                </CollapseWrapper>
                <CollapseWrapper title="React.Children.toArray">
                    <BlockQuoteWrapper>
                        <p className="mt-3">
                            <code>React.Children.toArray(children)</code>
                            <br />
                            Возвращает непрозрачную структуру данных children в
                            виде плоского массива с ключами, заданные каждому
                            дочернему элементу. Полезно, если вы хотите
                            манипулировать коллекциями потомков в ваших методах
                            рендера, особенно если вы хотите отсортировать или
                            извлечь часть this.props.children перед её передачей
                            куда-либо.
                        </p>
                    </BlockQuoteWrapper>
                </CollapseWrapper>
            </CollapseWrapper>
            <Divider />
            <Subtitle>Examples</Subtitle>

            <ReactChildrenExample />
            <Divider />
            <Subtitle>Упражнения</Subtitle>
            <ChildrenExercise />
        </>
    );
};

export default ReactChildren;
