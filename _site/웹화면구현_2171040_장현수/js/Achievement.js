window.addEventListener('load', function () {

    const acCon = this.document.getElementById('achievementsCon');
    for (let i = 0; i < Titles.length; ++i) {
        const sector = this.document.createElement('section');
        sector.className = "Competition";

        const leagueName = this.document.createElement('h1');
        leagueName.innerHTML = Titles[i].name;
        
        sector.appendChild(leagueName);

        for(let j = 0; j < Titles[i].won.length; ++j)
            {

                const titleBox = this.document.createElement('div');
                titleBox.className = "titleBox";

                const trophyCon = this.document.createElement('div');
                trophyCon.className = "trophyCon";

                const trophy = this.document.createElement('img');
                trophy.src = Titles[i].Trophy;
            
                trophyCon.appendChild(trophy);
                titleBox.appendChild(trophyCon);

                const year = this.document.createElement('div');
                year.innerHTML = "<h5>" + Titles[i].won[j] + "</h5>";
                titleBox.appendChild(year);


                sector.appendChild(titleBox);
            }

        acCon.appendChild(sector);
    


    }





    //const PL_Box = document.querySelector("#PremierLeague");
    // for (let i = 0; i < Titles.length; ++i) {

    //     const CompetitionSec = this.document.createElement('section');
    //     CompetitionSec.className = "Competition";

    //     for (let j = 0; j < Titles.keys[i].length; j++) 
    //     {
    //         const titleBox = this.document.createElement('div');
    //         titleBox.id = "titleBox";

    //         CompetitionSec.appendChild(titleBox);

    //     }



    //     acCon.appendChild(CompetitionSec);
    // }
})