// utils/translationImports.js

const translationFilesStatic = {
  en: () => import('../../assets/Static Data/mock-data/static_text/en.js'),
  ar: () => import('../../assets/Static Data/mock-data/static_text/ar.js'),
  fr: () => import('../../assets/Static Data/mock-data/static_text/fr.js'),
  es: () => import('../../assets/Static Data/mock-data/static_text/es.js'),
  de: () => import('../../assets/Static Data/mock-data/static_text/de.js'),
  it: () => import('../../assets/Static Data/mock-data/static_text/it.js'),
  pt: () => import('../../assets/Static Data/mock-data/static_text/pt.js'),
  ru: () => import('../../assets/Static Data/mock-data/static_text/ru.js'),
  zh: () => import('../../assets/Static Data/mock-data/static_text/zh.js'),
  ja: () => import('../../assets/Static Data/mock-data/static_text/ja.js'),
  ko: () => import('../../assets/Static Data/mock-data/static_text/ko.js'),
  hi: () => import('../../assets/Static Data/mock-data/static_text/hi.js'),
  tr: () => import('../../assets/Static Data/mock-data/static_text/tr.js'),
  nl: () => import('../../assets/Static Data/mock-data/static_text/nl.js'),
  pl: () => import('../../assets/Static Data/mock-data/static_text/pl.js'),
  sv: () => import('../../assets/Static Data/mock-data/static_text/sv.js'),
  da: () => import('../../assets/Static Data/mock-data/static_text/da.js'),
  fi: () => import('../../assets/Static Data/mock-data/static_text/fi.js'),
  no: () => import('../../assets/Static Data/mock-data/static_text/no.js'),
  el: () => import('../../assets/Static Data/mock-data/static_text/el.js'),
  he: () => import('../../assets/Static Data/mock-data/static_text/he.js'),
  id: () => import('../../assets/Static Data/mock-data/static_text/id.js'),
  ms: () => import('../../assets/Static Data/mock-data/static_text/ms.js'),
  th: () => import('../../assets/Static Data/mock-data/static_text/th.js'),
  vi: () => import('../../assets/Static Data/mock-data/static_text/vi.js'),
  uk: () => import('../../assets/Static Data/mock-data/static_text/uk.js'),
  cs: () => import('../../assets/Static Data/mock-data/static_text/cs.js'),
  ro: () => import('../../assets/Static Data/mock-data/static_text/ro.js'),
  hu: () => import('../../assets/Static Data/mock-data/static_text/hu.js'),
  sk: () => import('../../assets/Static Data/mock-data/static_text/sk.js'),
  bg: () => import('../../assets/Static Data/mock-data/static_text/bg.js'),
  hr: () => import('../../assets/Static Data/mock-data/static_text/hr.js'),
  sr: () => import('../../assets/Static Data/mock-data/static_text/sr.js'),
  sl: () => import('../../assets/Static Data/mock-data/static_text/sl.js'),
  et: () => import('../../assets/Static Data/mock-data/static_text/et.js'),
  lv: () => import('../../assets/Static Data/mock-data/static_text/lv.js'),
  lt: () => import('../../assets/Static Data/mock-data/static_text/lt.js'),
};
const translationFilesCat = {
  en: () =>
    import('../../assets/Static Data/mock-data/categories_translations/default.js'),
  ar: () =>
    import('../../assets/Static Data/mock-data/categories_translations/default.js'),
  fr: () =>
    import('../../assets/Static Data/mock-data/categories_translations/fr.js'),
  es: () =>
    import('../../assets/Static Data/mock-data/categories_translations/es.js'),
  de: () =>
    import('../../assets/Static Data/mock-data/categories_translations/de.js'),
  it: () =>
    import('../../assets/Static Data/mock-data/categories_translations/it.js'),
  pt: () =>
    import('../../assets/Static Data/mock-data/categories_translations/pt.js'),
  ru: () =>
    import('../../assets/Static Data/mock-data/categories_translations/ru.js'),
  zh: () =>
    import('../../assets/Static Data/mock-data/categories_translations/zh.js'),
  ja: () =>
    import('../../assets/Static Data/mock-data/categories_translations/ja.js'),
  ko: () =>
    import('../../assets/Static Data/mock-data/categories_translations/ko.js'),
  hi: () =>
    import('../../assets/Static Data/mock-data/categories_translations/hi.js'),
  tr: () =>
    import('../../assets/Static Data/mock-data/categories_translations/tr.js'),
  nl: () =>
    import('../../assets/Static Data/mock-data/categories_translations/nl.js'),
  pl: () =>
    import('../../assets/Static Data/mock-data/categories_translations/pl.js'),
  sv: () =>
    import('../../assets/Static Data/mock-data/categories_translations/sv.js'),
  da: () =>
    import('../../assets/Static Data/mock-data/categories_translations/da.js'),
  fi: () =>
    import('../../assets/Static Data/mock-data/categories_translations/fi.js'),
  no: () =>
    import('../../assets/Static Data/mock-data/categories_translations/no.js'),
  el: () =>
    import('../../assets/Static Data/mock-data/categories_translations/el.js'),
  he: () =>
    import('../../assets/Static Data/mock-data/categories_translations/he.js'),
  id: () =>
    import('../../assets/Static Data/mock-data/categories_translations/id.js'),
  ms: () =>
    import('../../assets/Static Data/mock-data/categories_translations/ms.js'),
  th: () =>
    import('../../assets/Static Data/mock-data/categories_translations/th.js'),
  vi: () =>
    import('../../assets/Static Data/mock-data/categories_translations/vi.js'),
  uk: () =>
    import('../../assets/Static Data/mock-data/categories_translations/uk.js'),
  cs: () =>
    import('../../assets/Static Data/mock-data/categories_translations/cs.js'),
  ro: () =>
    import('../../assets/Static Data/mock-data/categories_translations/ro.js'),
  hu: () =>
    import('../../assets/Static Data/mock-data/categories_translations/hu.js'),
  sk: () =>
    import('../../assets/Static Data/mock-data/categories_translations/sk.js'),
  bg: () =>
    import('../../assets/Static Data/mock-data/categories_translations/bg.js'),
  hr: () =>
    import('../../assets/Static Data/mock-data/categories_translations/hr.js'),
  sr: () =>
    import('../../assets/Static Data/mock-data/categories_translations/sr.js'),
  sl: () =>
    import('../../assets/Static Data/mock-data/categories_translations/sl.js'),
  et: () =>
    import('../../assets/Static Data/mock-data/categories_translations/et.js'),
  lv: () =>
    import('../../assets/Static Data/mock-data/categories_translations/lv.js'),
  lt: () =>
    import('../../assets/Static Data/mock-data/categories_translations/lt.js'),
};
const translationFilesMen = {
  en: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  ar: () => import('../../assets/Static Data/mentions_tr_app/ar.js'),
  fr: () => import('../../assets/Static Data/mentions_tr_app/fr.js'),
  es: () => import('../../assets/Static Data/mentions_tr_app/es.js'),
  de: () => import('../../assets/Static Data/mentions_tr_app/de.js'),
  it: () => import('../../assets/Static Data/mentions_tr_app/it.js'),
  pt: () => import('../../assets/Static Data/mentions_tr_app/pt.js'),
  ru: () => import('../../assets/Static Data/mentions_tr_app/ru.js'),
  zh: () => import('../../assets/Static Data/mentions_tr_app/zh.js'),
  ja: () => import('../../assets/Static Data/mentions_tr_app/ja.js'),
  ko: () => import('../../assets/Static Data/mentions_tr_app/ko.js'),
  hi: () => import('../../assets/Static Data/mentions_tr_app/hi.js'),
  tr: () => import('../../assets/Static Data/mentions_tr_app/tr.js'),
  nl: () => import('../../assets/Static Data/mentions_tr_app/nl.js'),
  pl: () => import('../../assets/Static Data/mentions_tr_app/pl.js'),
  sv: () => import('../../assets/Static Data/mentions_tr_app/sv.js'),
  da: () => import('../../assets/Static Data/mentions_tr_app/da.js'),
  fi: () => import('../../assets/Static Data/mentions_tr_app/fi.js'),
  no: () => import('../../assets/Static Data/mentions_tr_app/no.js'),
  el: () => import('../../assets/Static Data/mentions_tr_app/el.js'),
  he: () => import('../../assets/Static Data/mentions_tr_app/he.js'),
  id: () => import('../../assets/Static Data/mentions_tr_app/id.js'),
  ms: () => import('../../assets/Static Data/mentions_tr_app/ms.js'),
  th: () => import('../../assets/Static Data/mentions_tr_app/th.js'),
  vi: () => import('../../assets/Static Data/mentions_tr_app/vi.js'),
  uk: () => import('../../assets/Static Data/mentions_tr_app/uk.js'),
  cs: () => import('../../assets/Static Data/mentions_tr_app/cs.js'),
  ro: () => import('../../assets/Static Data/mentions_tr_app/ro.js'),
  hu: () => import('../../assets/Static Data/mentions_tr_app/hu.js'),
  sk: () => import('../../assets/Static Data/mentions_tr_app/sk.js'),
  bg: () => import('../../assets/Static Data/mentions_tr_app/bg.js'),
  hr: () => import('../../assets/Static Data/mentions_tr_app/hr.js'),
  sr: () => import('../../assets/Static Data/mentions_tr_app/sr.js'),
  sl: () => import('../../assets/Static Data/mentions_tr_app/sl.js'),
  et: () => import('../../assets/Static Data/mentions_tr_app/et.js'),
  lv: () => import('../../assets/Static Data/mentions_tr_app/lv.js'),
  lt: () => import('../../assets/Static Data/mentions_tr_app/lt.js'),
};
const translationFilesCate = {
  en: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  ar: () =>
    import('../../assets/Static Data/mock-data/filter_categories/ar.js'),
  fr: () =>
    import('../../assets/Static Data/mock-data/filter_categories/fr.js'),
  es: () =>
    import('../../assets/Static Data/mock-data/filter_categories/es.js'),
  de: () =>
    import('../../assets/Static Data/mock-data/filter_categories/de.js'),
  it: () =>
    import('../../assets/Static Data/mock-data/filter_categories/it.js'),
  pt: () =>
    import('../../assets/Static Data/mock-data/filter_categories/pt.js'),
  ru: () =>
    import('../../assets/Static Data/mock-data/filter_categories/ru.js'),
  zh: () =>
    import('../../assets/Static Data/mock-data/filter_categories/zh.js'),
  ja: () =>
    import('../../assets/Static Data/mock-data/filter_categories/ja.js'),
  ko: () =>
    import('../../assets/Static Data/mock-data/filter_categories/ko.js'),
  hi: () =>
    import('../../assets/Static Data/mock-data/filter_categories/hi.js'),
  tr: () =>
    import('../../assets/Static Data/mock-data/filter_categories/tr.js'),
  nl: () =>
    import('../../assets/Static Data/mock-data/filter_categories/nl.js'),
  pl: () =>
    import('../../assets/Static Data/mock-data/filter_categories/pl.js'),
  sv: () =>
    import('../../assets/Static Data/mock-data/filter_categories/sv.js'),
  da: () =>
    import('../../assets/Static Data/mock-data/filter_categories/da.js'),
  fi: () =>
    import('../../assets/Static Data/mock-data/filter_categories/fi.js'),
  no: () =>
    import('../../assets/Static Data/mock-data/filter_categories/no.js'),
  el: () =>
    import('../../assets/Static Data/mock-data/filter_categories/el.js'),
  he: () =>
    import('../../assets/Static Data/mock-data/filter_categories/he.js'),
  id: () =>
    import('../../assets/Static Data/mock-data/filter_categories/id.js'),
  ms: () =>
    import('../../assets/Static Data/mock-data/filter_categories/ms.js'),
  th: () =>
    import('../../assets/Static Data/mock-data/filter_categories/th.js'),
  vi: () =>
    import('../../assets/Static Data/mock-data/filter_categories/vi.js'),
  uk: () =>
    import('../../assets/Static Data/mock-data/filter_categories/uk.js'),
  cs: () =>
    import('../../assets/Static Data/mock-data/filter_categories/cs.js'),
  ro: () =>
    import('../../assets/Static Data/mock-data/filter_categories/ro.js'),
  hu: () =>
    import('../../assets/Static Data/mock-data/filter_categories/hu.js'),
  sk: () =>
    import('../../assets/Static Data/mock-data/filter_categories/sk.js'),
  bg: () =>
    import('../../assets/Static Data/mock-data/filter_categories/bg.js'),
  hr: () =>
    import('../../assets/Static Data/mock-data/filter_categories/hr.js'),
  sr: () =>
    import('../../assets/Static Data/mock-data/filter_categories/sr.js'),
  sl: () =>
    import('../../assets/Static Data/mock-data/filter_categories/sl.js'),
  et: () =>
    import('../../assets/Static Data/mock-data/filter_categories/et.js'),
  lv: () =>
    import('../../assets/Static Data/mock-data/filter_categories/lv.js'),
  lt: () =>
    import('../../assets/Static Data/mock-data/filter_categories/lt.js'),
};
const learnTranslations = {
  en: () =>
    import('../../assets/Static Data/mock-data/learn_translations/en.js'),
  ar: () =>
    import('../../assets/Static Data/mock-data/learn_translations/ar.js'),
  fr: () =>
    import('../../assets/Static Data/mock-data/learn_translations/fr.js'),
  es: () =>
    import('../../assets/Static Data/mock-data/learn_translations/es.js'),
  de: () =>
    import('../../assets/Static Data/mock-data/learn_translations/de.js'),
  it: () =>
    import('../../assets/Static Data/mock-data/learn_translations/it.js'),
  pt: () =>
    import('../../assets/Static Data/mock-data/learn_translations/pt.js'),
  ru: () =>
    import('../../assets/Static Data/mock-data/learn_translations/ru.js'),
  zh: () =>
    import('../../assets/Static Data/mock-data/learn_translations/zh.js'),
  ja: () =>
    import('../../assets/Static Data/mock-data/learn_translations/ja.js'),
  ko: () =>
    import('../../assets/Static Data/mock-data/learn_translations/ko.js'),
  hi: () =>
    import('../../assets/Static Data/mock-data/learn_translations/hi.js'),
  tr: () =>
    import('../../assets/Static Data/mock-data/learn_translations/tr.js'),
  nl: () =>
    import('../../assets/Static Data/mock-data/learn_translations/nl.js'),
  pl: () =>
    import('../../assets/Static Data/mock-data/learn_translations/pl.js'),
  sv: () =>
    import('../../assets/Static Data/mock-data/learn_translations/sv.js'),
  da: () =>
    import('../../assets/Static Data/mock-data/learn_translations/da.js'),
  fi: () =>
    import('../../assets/Static Data/mock-data/learn_translations/fi.js'),
  no: () =>
    import('../../assets/Static Data/mock-data/learn_translations/no.js'),
  el: () =>
    import('../../assets/Static Data/mock-data/learn_translations/el.js'),
  he: () =>
    import('../../assets/Static Data/mock-data/learn_translations/he.js'),
  id: () =>
    import('../../assets/Static Data/mock-data/learn_translations/id.js'),
  ms: () =>
    import('../../assets/Static Data/mock-data/learn_translations/ms.js'),
  th: () =>
    import('../../assets/Static Data/mock-data/learn_translations/th.js'),
  vi: () =>
    import('../../assets/Static Data/mock-data/learn_translations/vi.js'),
  uk: () =>
    import('../../assets/Static Data/mock-data/learn_translations/uk.js'),
  cs: () =>
    import('../../assets/Static Data/mock-data/learn_translations/cs.js'),
  ro: () =>
    import('../../assets/Static Data/mock-data/learn_translations/ro.js'),
  hu: () =>
    import('../../assets/Static Data/mock-data/learn_translations/hu.js'),
  sk: () =>
    import('../../assets/Static Data/mock-data/learn_translations/sk.js'),
  bg: () =>
    import('../../assets/Static Data/mock-data/learn_translations/bg.js'),
  hr: () =>
    import('../../assets/Static Data/mock-data/learn_translations/hr.js'),
  sr: () =>
    import('../../assets/Static Data/mock-data/learn_translations/sr.js'),
  sl: () =>
    import('../../assets/Static Data/mock-data/learn_translations/sl.js'),
  et: () =>
    import('../../assets/Static Data/mock-data/learn_translations/et.js'),
  lv: () =>
    import('../../assets/Static Data/mock-data/learn_translations/lv.js'),
  lt: () =>
    import('../../assets/Static Data/mock-data/learn_translations/lt.js'),
};

export async function getTranslationFile(translation, folderName) {
  if (
    folderName !== 'static_text' &&
    folderName !== 'categories_translations' &&
    folderName !== 'mentions_translations' &&
    folderName !== 'filter_categories' &&
    folderName !== 'learn_translations'
  ) {
    throw new Error(`Unknown folder: ${folderName}`);
  }

  if (folderName === 'static_text') {
    const importer = translationFilesStatic[translation || 'en'];
    return await importer();
  } else if (folderName === 'categories_translations') {
    const importer = translationFilesCat[translation || 'en'];
    return await importer();
  } else if (folderName === 'mentions_translations') {
    const importer = translationFilesMen[translation || 'en'];
    return await importer();
  } else if (folderName === 'filter_categories') {
    const importer = translationFilesCate[translation || 'en'];
    return await importer();
  } else if (folderName === 'learn_translations') {
    const importer = learnTranslations[translation || 'en'];
    console.log(importer);
    return await importer();
  } else {
    throw new Error(`Translation not found: ${translation}`);
  }
}
