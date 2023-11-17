import "./App.css";

import Search from "./components/Search";
import List from "./components/List";
import { useState } from "react";

function App() {

	const textList = [
		{
			baslik: "React Öğreniyorum",
			url: "sdu.edu.tr",
			yazar: "Sinan Yüksel",
			yorum_sayisi: 3,
			puan: 4,
			id: 0,
		},
		{
			baslik: "Web Teknolojileri ve Programlama",
			url: "google.com.tr",
			yazar: "Asım Yüksel",
			yorum_sayisi: 2,
			puan: 5,
			id: 1,
		},
	];

	const [searchText, setSearchText] = useState(localStorage.searchText || "");

	function handleSearchInput(e) {
		setSearchText(e.target.value);
		localStorage.searchText = e.target.value;
	}

	return (
		<div>
			<h1>Yazılar</h1>
			<Search changeSearchText={handleSearchInput} searchText={searchText}/>
			<hr />
			<List texts={textList} searchText={searchText} />
		</div>
	);
}

export default App;
