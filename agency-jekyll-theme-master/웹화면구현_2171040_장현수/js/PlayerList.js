const plData =  //playerInformationArray // 선수의 사진 및 정보
    [
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/VictorLindelof.webp',
            playerName: "빅토르 린델뢰프",
            playerBackNumber: 2,
            playerAge: 29,
            playerAppearance: 248,
            playerTotalGoal: 4,
            index: 0
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/HarryMaguire.webp',
            playerName: "해리 매과이어",
            playerBackNumber: 5,
            playerAge: 30,
            playerAppearance: 188,
            playerTotalGoal: 8,
            index: 1
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/DiogoDalot.webp',
            playerName: "디오고 달롯",
            playerBackNumber: 20,
            playerAge: 24,
            playerAppearance: 126,
            playerTotalGoal: 4
            ,
            index: 2
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/HannibalMejbri.webp',
            playerName: "한니발 메브리",
            playerBackNumber: 46,
            playerAge: 20
            ,
            index: 3
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/AaronWanBissaka.webp',
            playerName: "아론 완-비사카",
            playerBackNumber: 29,
            playerAge: 26
            ,
            index: 4
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/AlejandroGarnacho.webp',
            playerName: "알레한드로 가르나초",
            playerBackNumber: 17,
            playerAge: 19,
            index: 5
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/AltayBayindir.webp',
            playerName: "알타이 바인드르",
            playerBackNumber: 1,
            playerAge: 25,
            index: 6
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/AmadDiallo.webp',
            playerName: "아마드 디알로",
            playerBackNumber: 16,
            playerAge: 21,
            index: 7
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/AndreOnana.webp',
            playerName: "안드레 오나나",
            playerBackNumber: 24,
            playerAge: 27,
            index: 8
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/AnthonyMartial.webp',
            playerName: "앙토니 마시알",
            playerBackNumber: 9,
            playerAge: 27,
            index: 9
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/Antony.webp',
            playerName: "안토니",
            playerBackNumber: 21,
            playerAge: 23,
            index: 10
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/BrunoFernandes.webp',
            playerName: "브루노 페르난데스",
            playerBackNumber: 8,
            playerAge: 29,
            index: 11
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/Casemiro.webp',
            playerName: "카세미루",
            playerBackNumber: 18,
            playerAge: 31,
            index: 12
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/ChristianEriksen.webp',
            playerName: "크리스티안 에릭센",
            playerBackNumber: 14,
            playerAge: 31,
            index: 13
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/DonnyVanDeBeek.webp',
            playerName: "도니 반 더 베이크",
            playerBackNumber: 34,
            playerAge: 26,
            index: 14
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/FacundoPellistri.webp',
            playerName: "파쿤도 펠리스트리",
            playerBackNumber: 28,
            playerAge: 21,
            index: 15
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/JadonSancho.webp',
            playerName: "제이든 산초",
            playerBackNumber: 25,
            playerAge: 23,
            index: 16
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/JonnyEvans.webp',
            playerName: "조니 에반스",
            playerBackNumber: 35,
            playerAge: 35,
            index: 17
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/KobbieMainoo.webp',
            playerName: "코비 마이누",
            playerBackNumber: 37,
            playerAge: 18,
            index: 18
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/LisandroMartinez.webp',
            playerName: "리산드로 마르티네즈",
            playerBackNumber: 6,
            playerAge: 25,
            index: 19
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/LukeShaw.webp',
            playerName: "루크 쇼",
            playerBackNumber: 23,
            playerAge: 28,
            index: 20
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/MarcusRashford.webp',
            playerName: "마커스 래쉬포드",
            playerBackNumber: 11,
            playerAge: 26,
            index: 21
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/MasonMount.webp',
            playerName: "메이슨 마운트",
            playerBackNumber: 7,
            playerAge: 24,
            index: 22
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/RafaelVarane.webp',
            playerName: "라파엘 바란",
            playerBackNumber: 19,
            playerAge: 30,
            index: 23
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/RasmusHojlund.webp',
            playerName: "라스무스 호일룬",
            playerBackNumber: 11,
            playerAge: 20,
            index: 24
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/ScottMcTominay.webp',
            playerName: "스콧 맥토미니",
            playerBackNumber: 39,
            playerAge: 26,
            index: 25
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/SergioReguilon.webp',
            playerName: "세르히오 레길론",
            playerBackNumber: 15,
            playerAge: 26,
            index: 26
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/SholaShoretire.webp',
            playerName: "솔라 쇼레티러",
            playerBackNumber: 47,
            playerAge: 19,
            index: 27
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/SofianAmrabat.webp',
            playerName: "소피앙 암라바트",
            playerBackNumber: 4,
            playerAge: 27,
            index: 28
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/TomHeaton.webp',
            playerName: "톰 히튼",
            playerBackNumber: 22,
            playerAge: 37,
            index: 29
        },
        {
            playerImage: '웹화면구현_2171040_장현수/P_Image/TyrellMalacia.webp',
            playerName: "타이렐 말라시아",
            playerBackNumber: 12,
            playerAge: 24,
            index: 30
        }

    ];
