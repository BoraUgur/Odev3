import Text from "./Text";

export default function List(props) {
    return (
        <ul>
            {
                props.texts.map(function (text) {
                    return (
                        <Text text={text} key={text.id} searchText={props.searchText} />
                    );
                })
            }{" "}
        </ul>
    )
}