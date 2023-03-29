function App() {
    const [data,
        setData] = React.useState([]);
    console.log(data);
    React.useEffect(() => {

        async function fetchData() {
            const response = await fetch("https://quran-api.santrikoding.com/api/surah");
            const datas = await response.json();
            setData(datas);
        }

        fetchData();
    }, []);

    return (
        <div className="container text-center">
            <div className="text-lg p-4">
                <h1>Al Qur'an</h1>
            </div>

            <div className="row w-100 mx-auto">
            {data.map(res => (
                <div key={res.nomor} className="col-12 col-md-6 col-lg-4 p-2">
                    <div className="bg-light">
                        <div className="p-2">
                            {res.nama}
                        </div>
                        <div className="py-2">
                            {res.nama_latin}
                        </div>
                        <div className="pb-2">
                            {res.tempat_turun}
                        </div>
                        <div className="py-2">
                              <audio key={res.nomor} className="clip" src={res.audio} controls/>
                        </div>
                    </div>
                </div>
            ))}
            </div>
            <div className="max text-center mt-5 p-5">
            © 2023 </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'));