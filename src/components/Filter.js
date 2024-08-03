import React from "react";

const Filter =({onCategoryChange}) => {
    return (
        <div>
            <label htmlFor="category">Filter by category</label>
            <select id="category" onChange={(e) => onCategoryChange(e.target.value)}>
                <option value="all">All</option>
                <option value="fruits">Fruits</option>
                <option value="vegetables">Vegetables</option>
                <option value="dairy">Dairy</option>

            </select>
        </div>
    )
}
export default Filter;