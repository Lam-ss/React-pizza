import React from 'react'

// class Categories extends React.Component {
//     state = {
//         activeItem: null,
//     };

//     onSelectItem = index => {
//         this.setState({
//             activeItem: index
//         });
//     }

//     render() {
//         const {items, onClickItem} = this.props
//         return (
//             <div className="categories">
//                 <ul>
//                     <li className="active">Все</li>
//                     {items.map((name, index) => (
//                         <li 
//                             className={this.state.activeItem === index ? 'active' : ''}
//                             onClick={() => this.onSelectItem(index)} 
//                             key={`${name}_${index}`}>
//                             {name}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
// }



function Categories({ onClickItem, items }) {
    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index)
    }

    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {items.map((name, index) => (
                    <li 
                        className={activeItem === index ? 'active' : ''}
                        onClick={() => onSelectItem(index)} key={`${name}_${index}`}>
                        {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Categories;