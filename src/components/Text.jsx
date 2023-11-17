export default function Text(props) {
    const { id, baslik, yazar, yorum_sayisi, puan, url } = props.text;

    if (
        !baslik.toLowerCase().includes(props.searchText) &&
        !yazar.toLowerCase().includes(props.searchText) &&
        !yorum_sayisi.toString().includes(props.searchText) &&
        !puan.toString().includes(props.searchText) &&
        !url.toLowerCase().includes(props.searchText)
    )
        return (
            <>
                <strong>
                    Yazı Eşleşmiyor.
                </strong>
                <br />
            </>
        )

    return (
        <li key={id}>
            <span>
                <a href={url}>{baslik}</a>,
            </span>
            <span>
                <b>Yazar:</b> {yazar},{' '}
            </span>
            <span>
                <b>Yorum Sayısı:</b> {yorum_sayisi},{' '}
            </span>
            <span>
                <b>Puan:</b> {puan}
            </span>
        </li>
    );
}