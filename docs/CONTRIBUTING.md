# Guide de Contribution 🤝

Merci de votre intérêt pour contribuer à Zen Mods ! Ce guide vous aidera à comprendre comment participer efficacement au projet.

## 📋 Table des Matières

- [Code de Conduite](#code-de-conduite)
- [Comment Contribuer](#comment-contribuer)
- [Standards de Développement](#standards-de-développement)
- [Processus de Review](#processus-de-review)
- [Types de Contributions](#types-de-contributions)

## 📜 Code de Conduite

En participant à ce projet, vous acceptez de respecter notre code de conduite basé sur :

- **Respect** : Traiter tous les participants avec respect et courtoisie
- **Inclusivité** : Créer un environnement accueillant pour tous
- **Collaboration** : Travailler ensemble de manière constructive
- **Qualité** : Maintenir des standards élevés de code et de documentation

## 🚀 Comment Contribuer

### 1. Préparation

```bash
# Forker le projet sur GitHub
# Puis cloner votre fork
git clone https://github.com/VOTRE-USERNAME/zen-mods.git
cd zen-mods

# Ajouter le repository original comme remote
git remote add upstream https://github.com/username/zen-mods.git

# Installer les dépendances
npm install
```

### 2. Créer une Branche

```bash
# Créer et basculer sur une nouvelle branche
git checkout -b type/description-courte

# Exemples :
git checkout -b feat/tab-grouping-mod
git checkout -b fix/context-menu-icons
git checkout -b docs/installation-guide
```

### 3. Développement

- Respecter la structure de projet existante
- Suivre les conventions de nommage
- Écrire du code lisible et bien commenté
- Tester vos modifications

### 4. Commit et Push

```bash
# Ajouter les fichiers modifiés
git add .

# Commiter avec un message descriptif
git commit -m "feat: ajouter mod de regroupement d'onglets"

# Pousser vers votre fork
git push origin feat/tab-grouping-mod
```

### 5. Pull Request

1. Aller sur GitHub et créer une Pull Request
2. Utiliser le template fourni
3. Décrire clairement vos modifications
4. Lier les issues concernées si applicable

## 📏 Standards de Développement

### Convention de Commits

Utiliser la convention [Conventional Commits](https://www.conventionalcommits.org/) :

```
type(scope): description

type: feat, fix, docs, style, refactor, test, chore
scope: nom du mod ou composant (optionnel)
```

**Exemples** :

- `feat(tab-organizer): ajouter support des containers`
- `fix: corriger l'affichage des icônes en mode sombre`
- `docs: mettre à jour le guide d'installation`
- `style: améliorer le formatage du CSS`

### Structure d'un Mod

```
mods/nom-du-mod/
├── mod.json              # Métadonnées obligatoires
├── userChrome.css        # Styles CSS
├── script.js            # JavaScript (optionnel)
├── README.md            # Documentation
├── assets/              # Ressources (images, etc.)
└── tests/              # Tests (si applicable)
```

### mod.json

Structure obligatoire :

```json
{
  "name": "nom-du-mod",
  "displayName": "Nom Affiché",
  "version": "1.0.0",
  "description": "Description courte du mod",
  "author": "Votre Nom",
  "license": "MIT",
  "type": "userChrome",
  "compatibility": {
    "zen": ">=1.0.0",
    "firefox": ">=115.0"
  },
  "features": ["Liste des fonctionnalités"],
  "tags": ["tag1", "tag2"]
}
```

### CSS Guidelines

```css
/* Utilisez des sélecteurs spécifiques pour éviter les conflits */
#zenModSpecificSelector {
  /* Vos styles */
}

/* Utilisez des variables CSS pour la cohérence */
:root {
  --zen-mod-primary-color: #007acc;
  --zen-mod-secondary-color: #005a9e;
}

/* Support du mode sombre */
@media (prefers-color-scheme: dark) {
  :root {
    --zen-mod-primary-color: #4da6ff;
  }
}

/* Commentaires pour expliquer les sections complexes */
/* ========================================
   Section Title
   ======================================== */
```

### JavaScript Guidelines

```javascript
// Utiliser un IIFE pour éviter la pollution globale
(() => {
  'use strict';

  // Configuration au début
  const CONFIG = {
    MOD_NAME: 'mon-mod',
    VERSION: '1.0.0',
  };

  // Documentation des fonctions
  /**
   * Description de la fonction
   * @param {string} param - Description du paramètre
   * @returns {boolean} Description du retour
   */
  function maFonction(param) {
    // Implémentation
  }

  // Gestion d'erreurs
  try {
    // Code principal
  } catch (error) {
    console.error(`[${CONFIG.MOD_NAME}] Erreur:`, error);
  }
})();
```

## 🔍 Processus de Review

### Critères de Review

1. **Fonctionnalité** : Le code fait-il ce qu'il est censé faire ?
2. **Qualité** : Le code est-il lisible et maintenable ?
3. **Performance** : Y a-t-il un impact négatif sur les performances ?
4. **Compatibilité** : Fonctionne-t-il avec différentes versions ?
5. **Documentation** : La documentation est-elle complète et claire ?

### Checklist avant Soumission

- [ ] Le code suit les standards du projet
- [ ] Tous les tests passent (`npm test`)
- [ ] Le linting passe (`npm run lint`)
- [ ] Le formatage est correct (`npm run format:check`)
- [ ] La documentation est à jour
- [ ] Le mod a été testé dans Zen
- [ ] Les captures d'écran sont incluses si pertinentes

## 🎯 Types de Contributions

### 🆕 Nouveaux Mods

1. **Proposer** d'abord une issue pour discuter de l'idée
2. **Vérifier** qu'un mod similaire n'existe pas déjà
3. **Développer** selon les standards du projet
4. **Tester** soigneusement
5. **Documenter** complètement

### 🐛 Corrections de Bugs

1. **Créer** une issue décrivant le bug si elle n'existe pas
2. **Reproduire** le problème
3. **Corriger** en minimisant les changements
4. **Tester** la correction
5. **Mettre à jour** les tests si nécessaire

### 📚 Améliorations de Documentation

1. **Identifier** les sections à améliorer
2. **Écrire** de manière claire et concise
3. **Inclure** des exemples quand approprié
4. **Vérifier** l'orthographe et la grammaire

### 🎨 Améliorations UI/UX

1. **Documenter** le problème d'expérience utilisateur
2. **Proposer** une solution avec maquettes si possible
3. **Implémenter** de manière responsive
4. **Tester** sur différentes configurations

## 🏷️ Labels et Issues

### Types d'Issues

- `bug` : Problème à corriger
- `feature` : Nouvelle fonctionnalité
- `enhancement` : Amélioration d'existant
- `documentation` : Liée à la documentation
- `good first issue` : Bon pour débuter
- `help wanted` : Aide recherchée

### Priorités

- `priority: high` : Urgent
- `priority: medium` : Important
- `priority: low` : Peut attendre

## 🆘 Besoin d'Aide ?

- **Issues** : Pour signaler bugs et proposer fonctionnalités
- **Discussions** : Pour questions générales et idées
- **Discord/Chat** : (si configuré) Pour aide en temps réel

## 🎉 Remerciements

Votre contribution est précieuse ! Tous les contributeurs sont reconnus dans notre section remerciements.

---

**Merci de rendre Zen Browser encore meilleur ! 🚀**
