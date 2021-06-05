import React from 'react';
const Menu = ({ items }) => {

    return (
        <div>
            {items.map((menuItem) => {
                const { id, title, price, img, desc, credit, original } = menuItem;
                return (
                    <article className="menu-item" key={id}>
                        <header>
                            <h4>{title}</h4>
                            <h4 className="price" >${price}</h4>
                        </header>
                        <div className="item-info" >
                            <img src={img} alt={title} className="photo" />
                            
                            <p className="item-text" >{desc}</p>
                            
                        </div>
                        <p className="credit">Photo credit: {credit}.</p>
                        <p className="credit"> Original: {original}.</p>
                    </article>
                );
            })}
        </div>
    );
};

    export default Menu;