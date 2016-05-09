import ObjectsClasses from '../components/objects-classes';
import Destructuring from '../components/destructuring';
import TemplateStrings from '../components/template-strings';
import ArrowFunctions from '../components/arrow-functions';
import Promises from '../components/promises';
import Generators from '../components/generators';

const FEATURES = [
  { key: 'objects-classes', title: 'POO', tooltip: 'Objets & Classes', component: ObjectsClasses },
  { key: 'destructuring', title: 'Déstruct.', tooltip: 'Déstructuration', component: Destructuring },
  { key: 'template-strings', title: 'Templates', tooltip: 'Template Strings', component: TemplateStrings },
  { key: 'arrow-functions', title: 'Fx fléchées', tooltip: 'Fonctions fléchées', component: ArrowFunctions },
  { key: 'promises', title: 'Promesses', component: Promises },
  { key: 'generators', title: 'Générateurs', component: Generators }
]

export default FEATURES
