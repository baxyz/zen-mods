# Tab Context Menu Organizer

Un mod pour le navigateur Zen qui réorganise le menu contextuel des onglets en regroupant toutes les options de déplacement d'onglets dans un sous-menu dédié.

## Fonctionnalités

### 🎯 Organisation du Menu

- **Regroupe** toutes les options de déplacement d'onglets dans un sous-menu "Move Tab"
- **Simplifie** l'interface en réduisant le nombre d'éléments visibles
- **Préserve** toutes les fonctionnalités existantes

### 📋 Options Regroupées

Le sous-menu "Move Tab" contient :

- **Déplacement de position** :
  - Déplacer au début
  - Déplacer à la fin
- **Déplacement vers une nouvelle fenêtre**
- **Déplacement vers un espace de travail**
- **Envoi vers un autre appareil**
- **Ouverture dans un conteneur d'onglets**

## Installation

### Méthode 1 : CSS uniquement (Recommandée)

1. Localisez votre dossier de profil Zen
2. Naviguez vers le dossier `chrome/` (créez-le s'il n'existe pas)
3. Copiez le contenu de `userChrome.css` dans votre fichier `userChrome.css`
4. Redémarrez Zen

### Méthode 2 : Avec JavaScript (Fonctionnalités avancées)

1. Suivez les étapes de la méthode 1 pour le CSS
2. Copiez `tabContextOrganizer.js` dans votre dossier `chrome/`
3. Ajoutez le script en tant qu'userscript ou référencez-le dans votre configuration
4. Redémarrez Zen

## Structure des Fichiers

```
tab-context-organizer/
├── mod.json                 # Métadonnées du mod
├── userChrome.css          # Styles CSS pour la réorganisation
├── tabContextOrganizer.js  # Script JavaScript (optionnel)
└── README.md               # Ce fichier
```

## Configuration

### Personnalisation CSS

Vous pouvez personnaliser l'apparence en modifiant les variables CSS :

```css
#tabContextMenu {
  --zen-tab-move-submenu-icon: url('votre-icone.svg');
}
```

### Options JavaScript

Le script inclut une configuration modifiable :

```javascript
const CONFIG = {
  SUBMENU_LABEL: 'Move Tab', // Libellé du sous-menu
  // ... autres options
};
```

## Compatibilité

- **Zen Browser** : ≥ 1.0.0
- **Firefox** : ≥ 115.0 (base de Zen)
- **Thèmes** : Compatible avec les thèmes sombres et clairs

## Résolution de Problèmes

### Le sous-menu n'apparaît pas

1. Vérifiez que `userChrome.css` est activé dans Zen
2. Confirmez que le fichier est dans le bon dossier `chrome/`
3. Redémarrez complètement Zen

### Certaines options manquent

1. Vérifiez que toutes les extensions sont à jour
2. Certaines options peuvent ne pas être disponibles selon votre configuration

### Conflit avec d'autres mods

1. Chargez ce mod en dernier
2. Vérifiez les sélecteurs CSS pour les conflits
3. Utilisez la fonction `zenTabContextOrganizerCleanup()` pour désactiver temporairement

## Développement

### Structure du Code

- **CSS** : Styles pour masquer les éléments originaux et styliser le sous-menu
- **JavaScript** : Logique pour créer dynamiquement le sous-menu et déplacer les éléments

### Tests

Pour tester le mod :

1. Ouvrez plusieurs onglets
2. Faites un clic droit sur un onglet
3. Vérifiez la présence du sous-menu "Move Tab"
4. Testez chaque option du sous-menu

## Contribution

Les contributions sont les bienvenues ! Consultez le guide de contribution principal du projet.

## Licence

MIT - Voir le fichier LICENSE du projet principal.
