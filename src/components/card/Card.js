
function Card({topic,data}) {

    const format_date =(date) =>{
        const arr = date.split("T");
        let published_date = arr[0];
        return published_date;
    }
    console.log(data);
    

    return (
      <div className="card">
        <span className="topic-name">{topic}</span>
        <hr />
        {data
          .filter((i, index) => index < 3)
          .map((news, index) => {
            return (
              <>
                <div className="feeds" key={index}>
                  <div className="feed-des">
                    <a href={news.url}>
                      <span className="feed-source">{news.source.name}</span>
                      <p className="feed-content">{news.title}</p>
                    </a>
                    <span className="feed-date">
                      {format_date(news.publishedAt)}
                    </span>
                  </div>
                <hr />
                </div>
              </>
            );
          })}
        {/* <div className="feeds">
          <div className="feed-des">
            <a href="">
              <span className="feed-source">Ghanaweb</span>
              <p className="feed-content">
                Ashaiman military brutality: Clear sign that coup is 'no joke' -
                Sefa Kayi warns coup crusaders
              </p>
            </a>
            <span className="feed-date">02/01/2023</span>
          </div>
        </div>
        <hr />
        <div className="feeds">
          <div className="feed-des">
            <a href="">
              <span className="feed-source">Ghanaweb</span>
              <p className="feed-content">
                Ashaiman military brutality: Clear sign that coup is 'no joke' -
                Sefa Kayi warns coup crusaders
              </p>
            </a>
            <span className="feed-date">02/01/2023</span>
          </div>
        </div>
        <hr />
        <div className="feeds">
          <div className="feed-des">
            <a href="">
              <span className="feed-source">Ghanaweb</span>
              <p className="feed-content">
                Ashaiman military brutality: Clear sign that coup is 'no joke' -
                Sefa Kayi warns coup crusaders
              </p>
            </a>
            <span className="feed-date">02/01/2023</span>
          </div>
        </div> */}
      </div>
    );
}

export default Card