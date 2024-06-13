
window.addEventListener('load', function () {
    const playerListPanel = this.document.getElementById('playerContainer');

    for (var i = 0; i < plData.length; ++i) {
        const playerCard = this.document.createElement('div');
        playerCard.className = "player-card";

        playerCard.style.marginLeft = "10px";
        playerCard.style.marginTop = "10px";
        playerCard.style.width = "100px";
        playerCard.style.height = "auto";
        playerCard.style.transition = "transform 0.3s ease";
        

        const playerImg = this.document.createElement('img');
        playerImg.src = plData[i].playerImage;
        playerImg.id = "playerImage";
        playerCard.appendChild(playerImg);
        const playerName = this.document.createElement('h3');
        playerName.innerHTML = plData[i].playerName;
        playerName.style.fontSize = "10px";
        playerName.id = "playerName";
        playerName.style.width = "60px";
        

        const player = plData[i];
        playerCard.dataset.playerName = player.playerName;
        // playerCard.dataset.playerName.className = "neon-sign glow";
        playerCard.dataset.playerBackNumber = player.playerBackNumber;
        playerCard.dataset.playerAge = player.playerAge;
        playerCard.dataset.playerAppearance = player.playerAppearance;
        playerCard.dataset.playerTotalGoal = player.playerTotalGoal;
        playerCard.dataset.index = player.index;
        //playerCard.append(playerData);
        playerCard.appendChild(playerName);


        playerCard.addEventListener("click", function (event) {
            if (document.getElementById("PlayerDetailInfoContainer") != null) {
                document.getElementById("PlayerDetailInfoContainer").remove();
            }

            else {
                const playerDetailBox = document.createElement('div');
                playerDetailBox.id = "PlayerDetailInfoContainer";
                
                const bgImage = document.createElement('img');
                bgImage.src = "웹화면구현_2171040_장현수/Image/ManchesterUnitedEmblem.webp";
                bgImage.style.position = "absolute";
                bgImage.style.left = "50%";
                bgImage.style.top = "50%";
                bgImage.style.transform = "translate(-50%, -50%)";
                bgImage.style.zIndex = -1;
                bgImage.style.width = "150px";
                bgImage.style.height = "150px";
                bgImage.style.filter = "blur(3px)";
                
                playerDetailBox.appendChild(bgImage);
                

                playerDetailBox.style.position = "absolute";
                playerDetailBox.style.left = "50%";
                playerDetailBox.style.top = "50%";
                playerDetailBox.style.transform = "translate(-50%, -50%)";
                playerDetailBox.zIndex = 10;

                const plImage = document.createElement('img');
                plImage.src = playerImg.src;
                plImage.style.height = "60%";

                playerDetailBox.appendChild(plImage);

                const playerInfo = document.createElement('div');
                playerInfo.id = "playerInfo";

                playerInfo.innerHTML = playerCard.dataset.playerName
                    + "<br>" + playerCard.dataset.playerAge + "세"
                    + "<br>" + "등번호 : " + playerCard.dataset.playerBackNumber
                    + "<br>" + "출전 : " + playerCard.dataset.playerAppearance
                    + "<br>" + "득점 : " + playerCard.dataset.playerTotalGoal;

                const neonName = document.createElement('div');
                neonName.className = "neonName";
                neonName.innerHTML = playerCard.dataset.playerName;
                playerInfo.appendChild(neonName);


                playerDetailBox.appendChild(playerInfo);
                playerListPanel.appendChild(playerDetailBox);

            }

        })


        playerListPanel.appendChild(playerCard);
    };
})



