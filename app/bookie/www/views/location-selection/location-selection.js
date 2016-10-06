angular.module('starter').controller('CourtSelectionCtrl', function($scope, $http){


  $scope.courts = [
    {
      name: 'TC Bled',
      address: 'Ribno, Izletniška 44',
      location: 'Bled',
      postalCode: '4260',
      image: '../../assets/images/tennis-locations/igrišča_TC_Bled.jpg',
      description: 'TC Bled was founded back in 1995 and has 6 courts to play on. ' +
                    'Its in walking distance from the town center.',
      fulldescription: 'Teniški center Bled je bil ustanovljen leta 1995 in ponuja 6 teniških igrišč, ki so od središča ' +
      'mesta oddaljena 2 km. Lokacija je na senčni strani, kar omogoča prijetno vadbo tudi poleti pri visokih temperaturah.' +
      'Pozimi treningi potekajo v pokriti dvorani v Žirovnici.'
    },
    {
      name: 'Športni Center Dolgi Most',
      address: 'Dolgi most 6A',
      location: 'Ljubljana',
      postalCode: '1000',
      image: '../../assets/images/tennis-locations/dolgi_most.jpg',
      fulldescription: 'V največjem badmintonskem centru v Sloveniji vas čaka 14 badmintonskih igrišč in trgovina z ' +
      'badmintonsko opremo. Poskrbimo tudi za vašo rabljeno opremo, saj nudimo tudi napenjanje loparjev in ' +
      'zamenjavo gripa. V sklopu centra imamo tudi fitnes studio in bar z veliko teraso.'
    },
    {
      name: 'Bit Center',
      address: 'Litijska 57',
      location: 'Ljubljana',
      postalCode: '1000',
      image: '../../assets/images/tennis-locations/bit_center.jpg',
      fulldescription: 'V fitnes centru BIT vam je na voljo 400m2 površine klimatiziranega vadbenega prostora, ' +
      'kjer vas čaka širok izbor kardio naprav (tekaške steze, steperji, sobna kolesa, spinnerji, orbitrack, …), ' +
      'fitnes trenažerjev in prostih uteži.'
    },
    {
      name: 'Športni Center Protenex',
      address: 'Mlakarjeva 72',
      location: 'Šenčur',
      postalCode: '4208',
      image: '../../assets/images/tennis-locations/protenex-tenis-sportifiq.png',
      fulldescription: 'Vsakodnebno lahko igrate tenis, in-line hokej, mali nogomet, badminton, poleti pa tudi ' +
      'odbojko na mivki. Najboljsi prostor za ohladitev, po tako razburljivih tekmah, je seveda nas klubski bar s ' +
      'teraso. Prostor, kjer boste lahko shladili vasa prepotena telesa in nabrali energije, mogoče za nov podvig, mogoće za novo tekmo'
    },
    {
      name: 'Park Tivoli',
      address: 'Celovška 25',
      location: 'Ljubljana',
      postalCode: '1000',
      image: '../../assets/images/tennis-locations/tivoli.jpg',
      fulldescription: 'V Parku Tivoli je 10 zunanjih peščenih igrišč, in eno na umetni travi, ki skupaj merijo ' +
      '7.554 m2. Dve igrišči se nahajata pri Hali Tivoli, ostala igrišča pa se nahajajo v bližini Kopališča Tivoli.'
    },
    {
      name: 'ŠRC Koseze',
      address: 'Vodnikova 155',
      location: 'Ljubljana',
      postalCode: '1000',
      image: '../../assets/images/tennis-locations/claycourt_intro.jpg',
      fulldescription: 'Teniška šola Športplus je vzgojila že na stotine otrok, iz nje izhajata Blaž Kavčič in ' +
      'Aljaž Bedene, ki sta že prebila med top 100 igralce na ATP teniški lestvici. Glavni cilj kluba pa ni ' +
      'posvečen le vrhunskim dosežkom, ampak se z enako energijo posvečamo prav vsem, ki imajo radi ' +
      'ta izredno lep in dinamičen šport. Skrbimo za več pokritih in odprtih teniških igrišč, v najem nudimo ' +
      'tudi druge športne površine, ena temeljnih dejavnosti pa je teniška vzgoja otrok.'
    },
    {
      name: 'Športni Center Videmce',
      address: 'Videmce 6',
      location: 'Zg. Besnica',
      postalCode: '4201',
      image: '../../assets/images/tennis-locations/šc_videmce.jpg',
      fulldescription: 'Športni center VIDEMCE (bivši Uranič) se nahaja na prelepi lokaciji v Zgornji Besnici, ' +
      'oddaljeni le 5 minut iz Kranja. Šport je sestavni del urbanega življenja, zato ste vsi ljubitelji tenisa ' +
      'in odbojke na mivki, vljudno vabljeni v naš center. Na voljo so vam 3 kvalitetna teniška igrišča ter ' +
      'igrišče za odbojko na mivki.'
    },
    {
      name: 'Teniški Klub Portovald',
      address: 'Topoliška cesta 2c',
      location: 'Novo Mesto',
      postalCode: '8000',
      image: '../../assets/images/tennis-locations/Kodeljevo.jpg',
      fulldescription: 'Prva in najpomembnejša naloga kluba je popularizacija tenisa med otroki in mladino ter ' +
      'organizacija različnih oblik teniške vadbe za mlade vseh starosti. Začetki so bili težki, vendar polni ' +
      'optimizma in odločenosti, da moramo uspeti. S tem namenom smo že spomladi leta 1999 k sodelovanju pritegnili ' +
      'trenerja tenisa Jiříja Volta iz Češke, zibelke tenisa v Evropi, ki je ponujeni izziv sprejel. Ob popolnem ' +
      'zaupanju in podpori vodstva kluba je takoj začel s trenerskim delom ter aktivnostmi za promocijo tenisa ' +
      'in »svojega« teniškega kluba.'
    },
    {
      name: 'TK Triglav Kranj',
      address: 'Partizanska cesta 22',
      location: 'Kranj',
      postalCode: '4000',
      image: '../../assets/images/tennis-locations/DSC_0174b.jpg',
      fulldescription: 'Klubska dejavnost je sestavljena iz teniške šole, rekreativnega tenisa in ' +
      'tekmovalnega tenisa. Vsi segmenti so za klub pomembni, vendar se največ sredstev in energije vlaga v ' +
      'tekmovalni tenis – vrhunski tenis. Klub za svoje tekmovalce dvakrat letno (marca in oktobra) organizira ' +
      '5 dnevni teniški kamp. V času letnih počitnic pa so vsem na voljo teniške počitnice, kjer se poleg ' +
      'tenisa otroci naučijo še mnogih drugih športnih aktivnosti. Klub ima v letnem času na voljo 7 ' +
      'peščenih igrišč in 3 igrišča v dvorani s hitro podlago, pozimi pa 2 peščeni igrišči pod ' +
      'balonom in 3 igrišča v dvorani.'
    }

  ];

  $scope.setFavorites = function(court){

    court.favorites = !court.favorites;

  };



});




