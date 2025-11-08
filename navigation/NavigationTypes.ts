// 1. Pilha do Catálogo
export type CatalogStackParamList = {
  CatalogList: undefined;
  ProductDetail: { productId: string };
};

// 2. Abas
export type RootTabParamList = {
  Catalog: undefined;
  Register: undefined;
};

// 3. Pilha Raiz (Abas + Modais)
export type RootStackParamList = {
  MainTabs: undefined;
  ImagePickerCamera: undefined;
  ImagePickerGallery: undefined;
};