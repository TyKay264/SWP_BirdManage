import React from 'react'

const DropSelect = () => {
    return (
        <div>
            <form action="/">
                <label htmlFor="lang">Lồng</label>
                <select name="languages" id="lang">
                    <option value="select">1</option>
                    <option value="javascript">2</option>
                    <option value="php">3</option>
                    <option value="java">4</option>
                </select>
                
            </form>

        </div>
    )
}

export default DropSelect