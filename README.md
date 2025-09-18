# Zen Mods 🚀

Une collection de mods pour le navigateur Zen visant à améliorer l'expérience utilisateur en personnalisant et simplifiant l'interface.

[![CI/CD](https://github.com/username/zen-mods/workflows/CI/CD/badge.svg)](https://github.com/username/zen-mods/actions)
[![Code Quality](https://github.com/username/zen-mods/workflows/Code%20Quality/badge.svg)](https://github.com/username/zen-mods/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 📋 Table des Matières

- [Vue d'ensemble](#vue-densemble)
- [Mods Disponibles](#mods-disponibles)
- [Installation](#installation)
- [Développement](#développement)
- [Contribution](#contribution)
- [Support](#support)

## 🎯 Vue d'ensemble

Ce projet contient une collection de mods soigneusement conçus pour le navigateur Zen. Chaque mod est développé pour résoudre des problèmes d'ergonomie spécifiques tout en maintenant la compatibilité et les performances.

### Caractéristiques Principales

- 🎨 **Interface Améliorée** : Simplification et réorganisation des menus
- 🔧 **Facile à installer** : Instructions claires et fichiers prêts à l'emploi
- 🚀 **Performance** : Code optimisé sans impact sur la vitesse
- 🌓 **Thèmes** : Support complet des thèmes sombres et clairs
- 📱 **Responsive** : Adaptation aux différentes tailles d'écran

## 📦 Mods Disponibles

### 1. Tab Context Menu Organizer

**Version**: 1.0.0 | **Statut**: ✅ Stable

Réorganise le menu contextuel des onglets en regroupant toutes les options de déplacement dans un sous-menu dédié.

**Fonctionnalités** :

- Regroupe les options de déplacement d'onglets (début, fin, nouvelle fenêtre)
- Inclut les options d'espace de travail et de conteneur
- Intègre l'envoi vers d'autres appareils
- Interface plus propre et organisée

[📖 Documentation détaillée](./mods/tab-context-organizer/README.md)

---

_D'autres mods seront ajoutés prochainement..._

## 🚀 Installation

### Installation Rapide

1. **Téléchargez** la dernière release depuis la [page des releases](https://github.com/username/zen-mods/releases)
2. **Décompressez** l'archive
3. **Choisissez** les mods que vous souhaitez installer
4. **Suivez** les instructions spécifiques à chaque mod

### Installation depuis le Code Source

```bash
# Cloner le repository
git clone https://github.com/username/zen-mods.git
cd zen-mods

# Installer les dépendances
npm install

# Construire tous les mods
npm run build

# Les mods construits se trouvent dans ./dist/
```

### Configuration de Zen Browser

Pour que les mods fonctionnent, vous devez :

1. **Activer userChrome.css** dans Zen :
   - Aller dans `about:config`
   - Rechercher `toolkit.legacyUserProfileCustomizations.stylesheets`
   - Définir à `true`

2. **Localiser votre profil** :
   - Aller dans `about:support`
   - Cliquer sur "Ouvrir le dossier" à côté de "Dossier du profil"

3. **Créer le dossier chrome** (s'il n'existe pas) :
   ```
   profile-folder/
   └── chrome/
       ├── userChrome.css
       └── (autres fichiers de mods)
   ```

## 🛠️ Développement

### Prérequis

- Node.js ≥ 18.0.0
- npm ≥ 9.0.0
- Git

### Configuration de l'Environnement

```bash
# Cloner et installer
git clone https://github.com/username/zen-mods.git
cd zen-mods
npm install

# Installer les hooks Git
npm run prepare

# Lancer en mode développement
npm run dev
```

### Structure du Projet

```
zen-mods/
├── mods/                    # Dossier des mods
│   └── nom-du-mod/
│       ├── mod.json        # Métadonnées du mod
│       ├── userChrome.css  # Styles CSS
│       ├── script.js       # JavaScript (optionnel)
│       └── README.md       # Documentation
├── scripts/                # Scripts de build
├── docs/                   # Documentation
├── .github/                # Workflows CI/CD
└── dist/                   # Mods construits
```

### Créer un Nouveau Mod

1. **Créer le dossier** :

   ```bash
   mkdir mods/mon-nouveau-mod
   ```

2. **Créer mod.json** :

   ```json
   {
     "name": "mon-nouveau-mod",
     "displayName": "Mon Nouveau Mod",
     "version": "1.0.0",
     "description": "Description du mod",
     "author": "Votre Nom"
   }
   ```

3. **Développer** le mod (CSS, JS)
4. **Tester** avec `npm run build`
5. **Documenter** dans README.md

### Scripts Disponibles

```bash
npm run build          # Construire tous les mods
npm run dev           # Mode développement avec watch
npm run test          # Lancer les tests
npm run lint          # Vérifier le code
npm run lint:fix      # Corriger automatiquement
npm run format        # Formater le code
npm run format:check  # Vérifier le formatage
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Consultez notre [Guide de Contribution](./docs/CONTRIBUTING.md) pour commencer.

### Processus de Contribution

1. **Fork** le projet
2. **Créer** une branche pour votre fonctionnalité (`git checkout -b feature/ma-fonctionnalite`)
3. **Commiter** vos changements (`git commit -m 'feat: ajouter ma fonctionnalité'`)
4. **Pusher** vers la branche (`git push origin feature/ma-fonctionnalite`)
5. **Ouvrir** une Pull Request

### Standards de Code

- **ESLint** : Respecter la configuration ESLint
- **Prettier** : Code formaté automatiquement
- **Tests** : Inclure des tests si applicable
- **Documentation** : Documenter les nouvelles fonctionnalités

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 🆘 Support

- **Issues** : [Ouvrir une issue](https://github.com/username/zen-mods/issues)
- **Discussions** : [GitHub Discussions](https://github.com/username/zen-mods/discussions)
- **Email** : support@zen-mods.dev (si configuré)

## 🙏 Remerciements

- **Équipe Zen Browser** : Pour ce fantastique navigateur
- **Communauté Mozilla** : Pour les outils et la documentation
- **Contributeurs** : Merci à tous ceux qui améliorent ce projet

---

**⭐ Si ce projet vous plaît, n'hésitez pas à lui donner une étoile !**
