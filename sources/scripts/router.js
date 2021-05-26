// router.js

export const router = {};

/**
 * Changes the "page" (state) that your SPA app is currently set to
 */
router.setState = function (inputString,entry) {

  if (inputString.startsWith('BulletEditor') && entry==null) {
    document.querySelector("body").classList.remove("default-view");
    document.querySelector("body").classList.remove("cateEditor");
    document.querySelector("body").classList.add("bulletEditor");

    let entryPageOld = document.querySelector('bullet-editor-page');
    entryPageOld.parentNode.removeChild(entryPageOld);
    let entryPage = document.createElement('bullet-editor-page');
    document.querySelector("body").appendChild(entryPage);

  }else if (inputString.startsWith('backMain')) {
    document.querySelector("body").classList.remove("bulletEditor");
    document.querySelector("body").classList.remove("cateEditor");
    document.querySelector("body").classList.add("default-view");

  }else if (inputString.startsWith('CateEditor')&& entry==null) {
    document.querySelector("body").classList.remove("bulletEditor");
    document.querySelector("body").classList.remove("default-view");
    document.querySelector("body").classList.add("cateEditor");

    let entryPageOld = document.querySelector('cate-editor-page');
    entryPageOld.parentNode.removeChild(entryPageOld);
    let entryPage = document.createElement('cate-editor-page');
    document.querySelector("body").appendChild(entryPage);
    
  }else if (inputString.startsWith('BulletEditor') && entry!=null) {
    document.querySelector("body").classList.remove("default-view");
    document.querySelector("body").classList.remove("cateEditor");
    document.querySelector("body").classList.add("bulletEditor");

    let entryPageOld = document.querySelector('bullet-editor-page');
    entryPageOld.parentNode.removeChild(entryPageOld);
    let entryPage = document.createElement('bullet-editor-page');
    entryPage.bullet=entry;

    entryPage.old=entry;
    document.querySelector("body").appendChild(entryPage);
  }else if (inputString.startsWith('CateEditor') && entry!=null) {
    document.querySelector("body").classList.remove("default-view");
    document.querySelector("body").classList.add("cateEditor");
    document.querySelector("body").classList.remove("bulletEditor");

    let entryPageOld = document.querySelector('cate-editor-page');
    entryPageOld.parentNode.removeChild(entryPageOld);
    let entryPage = document.createElement('cate-editor-page');
    entryPage.category=entry;
    entryPage.old=entry;
    document.querySelector("body").appendChild(entryPage);
  }

}