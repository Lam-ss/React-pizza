import React from 'react'
import { SortPopup, Categories, PizzaBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters'

const categyNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
const sortItems = [
                    { name: 'популярности', type: 'popular' },
                    { name: 'цене', type: 'popular' },
                    { name: 'алфавиту', type: 'alphabet' },
                ]

function Home() {
    const dispatch = useDispatch();
    const { items } = useSelector((state) => {
        return {
            items: state.pizzas.items,
        }
    });

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClickItem={onSelectCategory}
                    items={categyNames}
                />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map(obj =>
                        <PizzaBlock key={obj.id} {...obj} />
                    )
                }

            </div>
        </div>
    )
}

export default Home
