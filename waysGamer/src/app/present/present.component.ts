import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-present',
  templateUrl: './present.component.html',
  styleUrls: ['./present.component.css'],
})
export class PresentComponent implements OnInit {
  listProfil = [
    {
      id: 1,
      logo: '/assets/picts/gagzzzLogo.jpg',
      profil: '/assets/picts/gagzzzProfil.jpg',
      identity: 'Gagzzz (Game Designer chez Wolfeye Studio, Youtubeur)',
      describe:
        'Gagzzz est une chaine youtube axée sur les jeux Vidéos et le Game Design, le fait qu’il soit dans la création des jeux apporte plus de nuances, de profondeurs et réalisme dans ses vidéos avec un peu d’humour.',
      facebookHref: 'facebook.com/GagzZzYT',
      xHref: 'twitter.com/GaGzZzYT',
      twitchHref: 'twitch.tv/gagzzzyt',
      youtubeHref: 'https://www.youtube.com/@Gagzzz82/featured',
      firstPositif:
        'des débats avec d’autres acteur de l’industrie de JV (Aymar Azaiza, Christophe Carrier)',
      firstVideo: '/assets/picts/video/gagzzzFirst.jpg',
      secondVideo: '/assets/picts/video/gagzzzSecond.jpg',
      thirdVideo: '/assets/picts/video/gagzzzThird.jpg',
      hrefFirst: 'https://www.youtube.com/watch?v=pIn7gtv1pYA&t=56s',
      hrefSecond: 'https://www.youtube.com/watch?v=uUPhlWus4f4&t=10s',
      hrefThird: 'https://www.youtube.com/watch?v=3UMi8ozjkcU',
    },
    {
      id: 2,
      logo: '/assets/picts/monsieurPloufLogo.jpg',
      profil: '/assets/picts/monsieurPloufProfil.jpg',
      identity: 'Monsieur Plouf (Youtubeur)',
      describe:
        'Tout ce qui touche de près ou de loin au jeu vidéo est passé à la moulinette sans langue de bois ni retenue, mais avec humour, autodérision et sens critique dans un style ploufesque.',
      facebookHref: 'facebook.com/MonsieurPlouf',
      xHref: 'twitter.com/MonsieurPlouf',
      twitchHref: 'twitch.tv/monsieurplouf',
      youtubeHref: 'https://www.youtube.com/@MonsieurPlouf/featured',
      firstPositif:
        'des critiques, des débats sous forme de dessin et une continuité dans l’histoire du personnage de Monsieur Plouf, Madame Plouf et leur fille',
      firstVideo: '/assets/picts/video/monsieurPloufFirst.jpg',
      secondVideo: '/assets/picts/video/monsieurPloufSecond.jpg',
      thirdVideo: '/assets/picts/video/monsieurPloufThird.jpg',
      hrefFirst: 'https://www.youtube.com/watch?v=-wVwf61N15Q&t=552s',
      hrefSecond: 'https://www.youtube.com/watch?v=ejaGPBASBIE',
      hrefThird: 'https://www.youtube.com/watch?v=HIhTUDXojKo',
    },
    {
      id: 3,
      logo: '/assets/picts/nostalgeekLogo.jpg',
      profil: '/assets/picts/nostalgeekProfil.jpg',
      identity: 'NostalGeek (Youtubeur)',
      describe:
        'NostalGeek est un youtuber portant sur la philosophie des jeux vidéos (des messages, des morals, à qui s’adressent t-ils) avec de belle effet de montages, de plans magnifiques.',
      facebookHref: '',
      xHref: 'twitter.com/nostalgeek_yt',
      twitchHref: 'twitch.tv/nostalive',
      youtubeHref: 'https://www.youtube.com/@NostalGeekYT/featured',
      firstPositif:
        'une analyse plus ou moins profonde sur la manière dont sont structurés les jeux.',
      firstVideo: '/assets/picts/video/nostalGeekFirst.jpg',
      secondVideo: '/assets/picts/video/nostalGeekSecond.jpg',
      thirdVideo: '/assets/picts/video/nostalGeekThird.jpg',
      hrefFirst: 'https://www.youtube.com/watch?v=vQKBl2er32o',
      hrefSecond: 'https://www.youtube.com/watch?v=oQRRdnzvNXg',
      hrefThird: 'https://www.youtube.com/watch?v=8EEJvzso6_A&t=741s',
    },
    {
      id: 4,
      logo: '/assets/picts/gameNextDoorLogo.jpg',
      profil: '/assets/picts/gameNextDoorProfil.jpg',
      identity: 'Game Next Door (Youtubeur)',
      describe:
        'Les thématiques de la plupart des jeux, la remise en question de l’industrie vidéoludique, ainsi que la manière dont les gens consomment les jeux sont les spécialités de G.N.D.',
      facebookHref: 'facebook.com/pages/Game-Next-Door/1608072346075095',
      xHref: 'twitter.com/GameNextDoor',
      twitchHref: '',
      youtubeHref: 'https://www.youtube.com/@GameNextDoor01/featured',
      firstPositif:
        'Fin Du Game : un audio test crée en collaboration avec Exserv',
      firstVideo: '/assets/picts/video/gameNextDoorFirst.jpg',
      secondVideo: '/assets/picts/video/gameNextDoorSecond.jpg',
      thirdVideo: '/assets/picts/video/gameNextDoorThird.jpg',
      hrefFirst: 'https://www.youtube.com/watch?v=zukUIwy8siI',
      hrefSecond: 'https://www.youtube.com/watch?v=ZRem0Na5kCE',
      hrefThird: 'https://www.youtube.com/watch?v=E967mkryOtc',
    },
    {
      id: 5,
      logo: '/assets/picts/exservLogo.jpg',
      profil: '/assets/picts/exsrevProfil.jpg',
      identity: 'Exserv (Youtubeur, Auteur des livres de Third Editions)',
      describe:
        'Exsrev est un youtuber axé les Souls-Likes(Dark Souls, Sekiro, Elden Rings) ainsi des analyses profondes et des critiques des jeux via ses vidéos, mais via l’audio notamment ‘’Fin du Game’’',
      facebookHref: 'https://www.facebook.com/exserv85/?locale=fr_FR',
      xHref: 'https://twitter.com/exserv85/status/1137848395555622913',
      twitchHref: 'https://www.twitch.tv/exserv',
      youtubeHref: 'https://www.youtube.com/@ExServ85/featured',
      firstPositif:
        'Fin Du Game : un audio test crée en collaboration avec Game Next Door',
      firstVideo: '/assets/picts/video/exservFirst.jpg',
      secondVideo: '/assets/picts/video/exservSecond.jpg',
      thirdVideo: '/assets/picts/video/exservThird.jpg',
      hrefFirst: 'https://www.youtube.com/watch?v=gc8D_NG7cxs&t=1s',
      hrefSecond: 'https://www.youtube.com/watch?v=K8t8s-r1328&t=53s',
      hrefThird: 'https://www.youtube.com/watch?v=DQV3P4649og',
    },
    {
      id: 6,
      logo: '/assets/picts/sheshounetLogo.jpg',
      profil: '/assets/picts/sheshounetProfil.jpg',
      identity: 'Sheshounet (Youtubeur)',
      describe:
        'Faire des tests les plus objectifs de l’univers, telle est la mission de Sheshounet, avec plus de classes, de gros mots, du cu et de la violence avec de l’humour bien senti',
      facebookHref: 'https://www.facebook.com/Sheshounet/?locale=fr_FR',
      xHref: 'twitter.fr/sheshounet',
      twitchHref: 'twitch.tv/sheshounet',
      youtubeHref: 'https://www.youtube.com/@Sheshounet/featured',
      firstPositif:
        'Critiques des test des journalistes spécialisés dans le gaming (JeuxVideo.com, Jeuxactu, Gameblog)',
      firstVideo: '/assets/picts/video/sheshounetFirst.jpg',
      secondVideo: '/assets/picts/video/sheshounetSecond.jpg',
      thirdVideo: '/assets/picts/video/sheshounetThird.jpg',
      hrefFirst: 'https://www.youtube.com/watch?v=uxtprgjSh5w&t=54s',
      hrefSecond: 'https://www.youtube.com/watch?v=L2GVD4LRuMM&t=1s',
      hrefThird: 'https://www.youtube.com/watch?v=bFuE57vvvDQ',
    },
    {
      id: 7,
      logo: '/assets/picts/toujoursThomasLogo.jpg',
      profil: '/assets/picts/toujoursThomasLogo.jpg',
      identity: 'Toujours Thomas (Youtubeur)',
      describe:
        'Faire des tests les plus objectifs de l’univers, telle est la mission de Sheshounet, avec plus de classes, de gros mots, du cu et de la violence avec de l’humour bien senti',
      facebookHref: '',
      xHref: 'twitter.com/toujoursthomas',
      twitchHref: 'https://www.twitch.tv/toujours_thomas',
      youtubeHref: 'https://www.youtube.com/@Toujours_Thomas/featured',
      firstPositif:
        'Critiques des test des journalistes spécialisés dans le gaming (JeuxVideo.com, Jeuxactu, Gameblog)',
      firstVideo: '/assets/picts/video/toujoursThomasFirst.jpg',
      secondVideo: '/assets/picts/video/toujoursThomasSecond.jpg',
      thirdVideo: '/assets/picts/video/toujoursThomasThird.jpg',
      hrefFirst: 'https://www.youtube.com/watch?v=VQGkX6ot490',
      hrefSecond: 'https://www.youtube.com/watch?v=tDTSpZuwt7U',
      hrefThird: 'https://www.youtube.com/watch?v=MROxCSB5Cpc',
    },
    {
      id: 8,
      logo: '/assets/picts/pseudoLessLogo.jpg',
      profil: '/assets/picts/pseudoLessProfil.jpg',
      identity: 'PseudoLess (Youtubeur)',
      describe:
        'Faire des tests les plus objectifs de l’univers, telle est la mission de Sheshounet, avec plus de classes, de gros mots, du cu et de la violence avec de l’humour bien senti',
      facebookHref: 'https://www.facebook.com/pseudoless.ichi?locale=fr_FR',
      xHref: 'twitter.com/PsEuDoLeSs_1',
      twitchHref: 'https://www.twitch.tv/pseudoless_1',
      youtubeHref: 'https://www.youtube.com/@PsEuDoLeSs1/featured',
      firstPositif:
        'Critiques des test des journalistes spécialisés dans le gaming (JeuxVideo.com, Jeuxactu, Gameblog)',
      firstVideo: '/assets/picts/video/pseudolessFirst.jpg',
      secondVideo: '/assets/picts/video/pseudolessSecond.jpg',
      thirdVideo: '/assets/picts/video/pseudolessThrid.jpg',
      hrefFirst: 'https://www.youtube.com/watch?v=ntcnzl1i9_c',
      hrefSecond: 'https://www.youtube.com/watch?v=TL9FbpVqYV4',
      hrefThird: 'https://www.youtube.com/watch?v=Gxly2JD3Ggk',
    },
    {
      id: 9,
      logo: '/assets/picts/iconoclasteLogo.jpg',
      profil: '/assets/picts/iconoclasteProfil.jpg',
      identity: 'Iconoclaste (Youtubeur)',
      describe:
        'Faire des tests les plus objectifs de l’univers, telle est la mission de Sheshounet, avec plus de classes, de gros mots, du cu et de la violence avec de l’humour bien senti',
      facebookHref: 'https://www.facebook.com/liconoclaste/?locale=fr_FR',
      xHref: 'twitter.com/iconoclaste_sp',
      twitchHref: 'https://www.twitch.tv/ico_noclaste',
      youtubeHref: 'https://www.youtube.com/@iconoclaste_sp/featured',
      firstPositif:
        'Critiques des test des journalistes spécialisés dans le gaming (JeuxVideo.com, Jeuxactu, Gameblog)',
      firstVideo: '/assets/picts/video/iconoclasteFirst.jpg',
      secondVideo: '/assets/picts/video/iconoclasteSecond.jpg',
      thirdVideo: '/assets/picts/video/iconoclasteThird.jpg',
      hrefFirst: 'https://www.youtube.com/watch?v=YM-dx29vyAc',
      hrefSecond: 'https://www.youtube.com/watch?v=iznMK1VTP0A&t=1169s',
      hrefThird: 'https://www.youtube.com/watch?v=iAeyO8BTTX0',
    },
  ];

  symbol: string = '';
  photo: string = '';
  name: string = '';
  story: string = '';
  facebook: string = '';
  x: string = '';
  twitch: string = '';
  youtube: string = '';
  positif: string = '';
  firstMove: string = '';
  secondMove: string = '';
  thirdMove: string = '';
  firstHref: string = '';
  secondHref: string = '';
  thirdHref: string = '';
  details: Array<any> = [];
  show: boolean = false;

  iconVisible: boolean = false;
  imgBackground: boolean = false;

  showTester(
    profil: string,
    identity: string,
    describe: string,
    facebookHref: string,
    xHref: string,
    twitchHref: string,
    youtubeHref: string,
    firstPositif: string,
    firstVideo: string,
    secondVideo: string,
    thirdVideo: string,
    hrefFirst: string,
    hrefSecond: string,
    hrefThird: string
  ) {
    this.photo = profil;
    this.name = identity;
    this.story = describe;
    this.facebook = facebookHref;
    this.x = xHref;
    this.twitch = twitchHref;
    this.youtube = youtubeHref;
    this.positif = firstPositif;
    this.firstMove = firstVideo;
    this.secondMove = secondVideo;
    this.thirdMove = thirdVideo;
    this.firstHref = hrefFirst;
    this.secondHref = hrefSecond;
    this.thirdHref = hrefThird;
    this.show = true;
    this.iconVisible = true;
    this.imgBackground = true;
  }

  ngOnInit(): void {
    this.show = false;
  }
}
