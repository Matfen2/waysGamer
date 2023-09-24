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
    },
    {
      id: 3,
      logo: '/assets/picts/nostalgeekLogo.jpg',
      profil: '/assets/picts/nostalgeekProfil.jpg',
      identity: 'NostalGeek (Youtubeur)',
      describe:
        'NostalGeek est un youtuber portant sur la philosophie des jeux vidéos (des messages, des morals, à qui s’adresse t-ils) avec de belle effet de montages, de plans magnifiques.',
      facebookHref: '',
      xHref: 'twitter.com/nostalgeek_yt',
      twitchHref: 'twitch.tv/nostalive',
      youtubeHref: 'https://www.youtube.com/@NostalGeekYT/featured',
      firstPositif:
        'une analyse plus ou moins profonde sur la manière dont sont structurés les jeux.',
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
  details: Array<any> = [];
  show: boolean = false;

  showTester(profil: string, identity: string, describe: string, facebookHref: string, xHref: string, twitchHref: string, youtubeHref: string, firstPositif: string) {
     this.photo = profil;
     this.name = identity;
     this.story = describe;
     this.facebook = facebookHref;
     this.x = xHref;
     this.twitch = twitchHref;
     this.youtube = youtubeHref;
     this.positif = firstPositif;
     this.show = true;
  }

  ngOnInit(): void {
    this.show = false;
  }
}
