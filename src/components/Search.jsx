export default function Search(props) {
    return (
        <div style={{ textAlign: "center" }}>
            <label htmlFor="arama">Ara: </label>
            <input id="arama" type="text" onChange={props.changeSearchText} value={props.searchText}/>

            <div>
                <i>
                    <strong>
                        Aranan Kelime: {props.searchText}
                    </strong>
                </i>
            </div>
        </div>
    )
}
