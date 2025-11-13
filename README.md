# *Cadastro de Produtos* 

*usar o `Image-Picker` para tirar fotos*



### **Navegações**
<ul>
<li>AppNavigator.tsx -> navegações Stack dos botoões ImagePickerCamera e ImagePickerGallery </li>
<li>CatalogNavigator.tsx -> navegação Stack do catalago e produto detalhes </li>
<li>MainTabNavigator.tsx -> navegação botton tab catalago e cadastrar Produto </li>
<li> NavigationTypes.ts -> Tipos das navegações </li>
</ul>


##  Bibliotecas e Funções-Chave

 As principais coisas que este projeto usa são:

* **`expo-image-picker`**:
    * `launchImageLibraryAsync()`
    * `allowsMultipleSelection: true`

---

## Anotações Importantes / Erros Comuns

Esta é a parte mais importante para *você*. Anote os problemas que você teve e como resolveu.

* **ERRO:** `[TypeError: addMedia is not a function (it is undefined)]`
    * **Causa:** Esqueci de envolver o `App.tsx` com o `<MediaProvider>`.
    * **Solução:** Adicionar `<MediaProvider>` no `App.tsx`.

* **ERRO:** `Invalid hook call` (na tela do Feed)
    * **Causa:** Chamei o hook `useVideoPlayer` dentro da função `renderItem` da FlatList.
    * **Solução:** Tive que criar um componente separado (`<PostItem>`) e chamar o hook dentro dele.

* **LEMBRETE (Câmera):** A prop `quality` para vídeo não vai no `recordAsync()`. Ela vai como `videoQuality={VideoQuality['720p']}` direto no componente `<CameraView>`.

* **LEMBRETE (Image Picker):** Se `allowsMultipleSelection: true` está ligado, a opção `allowsEditing: true` **não funciona**.


