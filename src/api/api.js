let localhostDev = true;

let _host = localhostDev ? "http://localhost:8080" : "http://www.ty120.com";
let apiUrl = {
    banner: _host + '/api/banner.php',
    news: _host + '/api/news.php',
    team: _host + '/api/team.php',
    hospital: _host + '/api/hospital.php',
    story: _host + '/api/story.php'
};
export { apiUrl };
