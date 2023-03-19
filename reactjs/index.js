function App() {

    const [quotes,
        setDataQuotes] = React.useState([]);
    const [randQuotes,
        setRandQuotes] = React.useState([]);
    const [randColor,
        setColors] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const response = await fetch("https://type.fit/api/quotes");
            const data = await response.json();

            setDataQuotes(data);
            let randIndex = Math.floor(Math.random() * data.length);
            setRandQuotes(data[randIndex]);
        }
        fetchData();
    }, []);
    function randomQuotesRead() {
        let colorArray = [
            '#FF6633',
            '#FFB399',
            '#FF33FF',
            '#FFFF99',
            '#00B3E6',
            '#E6B333',
            '#3366E6',
            '#999966',
            '#99FF99',
            '#B34D4D',
            '#80B300',
            '#809900',
            '#E6B3B3',
            '#6680B3',
            '#66991A',
            '#FF99E6',
            '#CCFF1A',
            '#FF1A66',
            '#E6331A',
            '#33FFCC',
            '#66994D',
            '#B366CC',
            '#4D8000',
            '#B33300',
            '#CC80CC',
            '#66664D',
            '#991AFF',
            '#E666FF',
            '#4DB3FF',
            '#1AB399',
            '#E666B3',
            '#33991A',
            '#CC9999',
            '#B3B31A',
            '#00E680',
            '#4D8066',
            '#809980',
            '#E6FF80',
            '#1AFF33',
            '#999933',
            '#FF3380',
            '#CCCC00',
            '#66E64D',
            '#4D80CC',
            '#9900B3',
            '#E64D66',
            '#4DB380',
            '#FF4D4D',
            '#99E6E6',
            '#6666FF'];
        let randIndex = Math.floor(Math.random() * quotes.length);
        let randColorIndex = Math.floor(Math.random() * colorArray.length);
        setRandQuotes(quotes[randIndex]);
        setColors(colorArray[randColorIndex]);
    }
    return (
        <div className="p-3 hvi-3" style={{backgroundColor: randColor}}>
        <div className="container pt-5">
        <div className="jumbotron" style={{backgroundColor: randColor}}>
        <div className="card">
        <div className="card-header">
Motivation Quotes
        </div>
        <div className="card-body">
        {randQuotes ? (
                <>
                <i className="font-weight-bold">- {randQuotes.author || "No Author"}</i>
                <p>
                    {randQuotes.text}
                </p> < />
            ): (
                <h2>Loading</h2>
            )}
        <div className="row">
            <button onClick={randomQuotesRead} className="btn btn-primary ml-3">New Quote</button>
            <a className="ml-2 btn btn-secondary" target="_blank" href={"https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + randQuotes.text + '" - ' + randQuotes.author)}><i className="fab fa-twitter"></i></a>
            <a className="ml-2 btn btn-dark" target="_blank" href={"https://www.tumblr.com/widgets/share/tool/preview?posttype=link&canonicalUrl=https://ardesigncircle.github.io/&caption=" + encodeURIComponent('"' + randQuotes.text + '" - ' + randQuotes.author)}><i className="fab fa-tumblr"></i></a>
            </div>
        </div>
        </div>
        </div>
        <div className="my-1 text-center">
         © 2023 Untitled.
        </div>
        </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('app'))