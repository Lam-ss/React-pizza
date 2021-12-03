import React from 'react'
import { SortPopup, Categories, PizzaBlock, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas';

const categyNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые',]
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'popular' },
    { name: 'алфавиту', type: 'alphabet' },
]

function Home() {
    const dispatch = useDispatch();
    const { items } = useSelector(( state ) => {return {items: state.pizzas.items,}});
    const  isLoaded  = useSelector(( state ) => state.pizzas.isLoaded);
    const { category, sortBy } = useSelector(( state ) => {return {filters: state.filters,}});

    console.log(isLoaded)

    React.useEffect(() => {
        dispatch(fetchPizzas())
    }, [category])

    const onSelectCategory = React.useCallback((index) => {
        // if (!items.length) {
            dispatch(setCategory(index));
        // }
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
                {isLoaded 
                    ? items.map(obj => <PizzaBlock key={obj.id} isLoading={true} {...obj} />) 
                    : Array(10).fill(0).map((_, index) => <PizzaLoadingBlock key={index} />)}
            </div>
        </div>
    )
}

export default Home
