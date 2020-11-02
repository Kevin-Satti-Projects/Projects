$(document).ready(function(){

    let data;

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    async function getData () {
        const response = await fetch('https://api.covid19api.com/summary', {mode: 'cors'});
        data = await response.json();

        console.log(data);
        $(".results").html(`
        <li>
          <span class="country">Global</span>
          <span class="newCases">${numberWithCommas(data['Global']['NewConfirmed'])}</span>
          <span class="totalCases">${numberWithCommas(data['Global']['TotalConfirmed'])}</span>
        </li>`);
    }


    getData();

    function displayMatches (e) {
        let re = new RegExp(`${e.target.value}`, 'gi');
        let matches = [];
        for (const key in data["Countries"]) {
            if(re.test(data["Countries"][key]["Country"])){
                matches.push(data["Countries"][key]);
            }
        }
        let html = matches.map(match => {
            const country = match["Country"];
            const newCases = match["NewConfirmed"];
            const totalCases = match["TotalConfirmed"];
            return(
              `<li>
                <span class="country">${country}</span>
                <span class="newCases">${numberWithCommas(newCases)}</span>
                <span class="totalCases">${numberWithCommas(totalCases)}</span>
              </li>`
            );
          });
        $(".results").html(html.join(""));
    }

    $(".search").on("keyup", displayMatches);
    



    console.log("Wallad");
});