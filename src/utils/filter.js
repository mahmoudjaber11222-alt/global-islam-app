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
  fr: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  es: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  de: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  it: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  pt: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  ru: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  zh: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  ja: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  ko: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  hi: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  tr: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  nl: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  pl: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  sv: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  da: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  fi: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  no: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  el: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  he: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  id: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  ms: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  th: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  vi: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  uk: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  cs: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  ro: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  hu: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  sk: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  bg: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  hr: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  sr: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  sl: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  et: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  lv: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
  lt: () => import('../../assets/Static Data/mentions_tr_app/en.js'),
};
const translationFilesCate = {
  en: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  ar: () =>
    import('../../assets/Static Data/mock-data/filter_categories/ar.js'),
  fr: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  es: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  de: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  it: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  pt: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  ru: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  zh: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  ja: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  ko: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  hi: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  tr: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  nl: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  pl: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  sv: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  da: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  fi: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  no: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  el: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  he: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  id: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  ms: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  th: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  vi: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  uk: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  cs: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  ro: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  hu: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  sk: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  bg: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  hr: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  sr: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  sl: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  et: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  lv: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
  lt: () =>
    import('../../assets/Static Data/mock-data/filter_categories/en.js'),
};

export async function getTranslationFile(translation, folderName) {
  if (
    folderName !== 'static_text' &&
    folderName !== 'categories_translations' &&
    folderName !== 'mentions_translations' &&
    folderName !== 'filter_categories'
  ) {
    throw new Error(`Unknown folder: ${folderName}`);
  }

  if (folderName === 'static_text') {
    const importer = translationFilesStatic[translation];
    return await importer();
  } else if (folderName === 'categories_translations') {
    const importer = translationFilesCat[translation];
    return await importer();
  } else if (folderName === 'mentions_translations') {
    const importer = translationFilesMen[translation];
    return await importer();
  } else if (folderName === 'filter_categories') {
    const importer = translationFilesCate[translation];
    return await importer();
  } else {
    throw new Error(`Translation not found: ${translation}`);
  }
}
