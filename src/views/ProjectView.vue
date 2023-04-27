<template>
  <div
    class="flex flex-row justify-between gap-4 mx-auto max-w-[1024px]"
    style="min-width: 60rem"
  >
    <div class="pb-4 pl-8 w-full pt-12" style="max-width: 40rem">
      <router-view></router-view>
      <span class="flex flex-col gap-3" v-if="$route.name == 'project'">
        <h1 id="s1" class="font-bold text-xl pb-4">Ana Sayfa İşlemleri</h1>

        <p id="s1-1 ">
          Yartu uygulamasına giriş yaptıktan sonra üst menüden Proje simgesine
          tıklanırsa Yartu Proje uygulamasına erişilebilir
        </p>
        <p id="s1-2">
          Yartu Proje uygulamasının ana ekranı 2 bölümden oluşmaktadır. Sağ
          tarafta proje uygulamasına ait işlemlerin yapılabildiği erişim menüsü,
          orta alanda ise oluşturulan proje içeriklerinin görüntülendiği alan
          bulunur. (Resim-1)
        </p>
        <myImage imgName="Resim 1" imgPath="anasayfa.png"></myImage>
        <h1 id="s2" class="font-bold text-xl py-4">Proje İşlemleri</h1>
        <p id="s2-1">
          Proje Oluşturma: Yartu Proje uygulamasında proje oluşturmak için sol
          menüde bulunan
          <img
            class="inline-block"
            src="../assets/icons/create-new-button.svg"
          />
          butonuna arkasından açılan menüde "Project" bağlantısına tıklanır.
        </p>
        <p id="s2-2">
          Açılan popup pencerede Proje Adı (2) , Proje Rengi ve Proje simgesi(1)
          seçilerek
          <img
            class="inline-block p-1"
            src="../assets/icons/create-button.png"
          />
          butonuna tıklanır. (Resim-2)
        </p>
        <myImage imgName="Resim 2" imgPath="Resim2.png"></myImage>

        <p id="s2-3">
          Proje oluşturulduktan sonra proje ana sayfasında ve sol menü alanında
          listelenir. (Resim - 3)
        </p>
        <myImage imgName="Resim 3" imgPath="Resim3.svg"></myImage>
        <p id="s2-4">
          Her projenin kısmında bulunan "<y-icon name="yi yi-more"> </y-icon>"
          simgesine tıklanarak proje değiştirilebilir , arşivlenebilir yada
          proje silinebilir. (Resim-4)
        </p>
        <myImage imgName="Resim 4" imgPath="Resim4.svg"></myImage>
        <p id="s2-5">
          Proje oluşturma işlemi bittikten sonra , proje içinde pano yada
          panoların oluşturulması gerekmektedir.
        </p>
        <h1 id="s3" class="font-bold text-xl py-4">Pano İşlemleri</h1>
        <p id="s3-1">
          Proje oluşturduktan sonra proje ekranında bulunan Create First Board
          bağlantılarına tıklanarak pano oluşturma işlemine başlanır. (Resim-5)
        </p>
        <myImage imgName="Resim 5" imgPath="Resim5.svg"></myImage>

        <p id="s3-2">
          Açılan popup pencerede Pano İsmi (1) , Pano Rengi (2), Şablon (3) ve
          Panonun hangi proje içinde oluşturulacağı seçilerek (4) ve pano
          kullanıcıları eklenerek (5)Create butonuna tıklanır. (Resim - 6)
        </p>
        <myImage imgName="Resim 6" imgPath="Resim6.svg"></myImage>
        <h1 id="s3-3" class="font-semibold text-lg py-4">Workflow Template</h1>
        <p id="s3-3-1">
          Daha önceden oluşturulan ve şablon olarak (template) kaydedilen iş
          akışları şablonları panolara uygulanabilir. (Resim - 7)
        </p>
        <myImage imgName="Resim 7" imgPath="Resim7.svg"></myImage>
        <p id="s3-4">
          <span class="font-semibold">Project :</span> Oluşturulan bir pano
          herhangi bir projenin içinde oluşturulabilir.
        </p>
        <p id="s3-5">
          <span class="font-semibold">Kullanıcılar :</span> Pano kullanıcılarını
          seçmek pano oluşturma ekranındaki Participants alanı kullanılır. Bu
          alana eklemek istediğiniz kullanıcı adını yazarak arama
          yapabilirsiniz. İstenmesi halinde pano oluşturulduktan sonra da panoya
          kullanıcı eklenebilir yada çıkarılabilir. (Resim -9)
        </p>
        <myImage imgName="Resim 9" imgPath="Resim9.svg"></myImage>
        <p id="s3-6">
          Kullanıcı eklendikten sonra kullanıcı rollerini değiştirmek yada
          kullanıcıyı panodan çıkartmak için "<y-icon name="yi yi-more">
          </y-icon
          >" simgesi kullanılır (Resim-10). Panoya üç farklı rolde kullanıcı
          eklenebilir.
        </p>
        <myImage imgName="Resim 10" imgPath="Resim10.svg"></myImage>
        <p id="s3-6-1">
          <span class="font-semibold">Kullanıcı Rolü :</span> Listede bulunan
          kartlara yorum yapabilir, kartları listeler arasında hareket
          ettirebilir, kart ekleyebilir , eklediği kartları silebilir. Pano
          ayarlarını değiştiremez . Sadece kullanıcı yetkileri vardır.
        </p>
        <p id="s3-6-2">
          <span class="font-semibold">Yönetici Rolü :</span>Pano üzerinde her
          türlü yetkiye sahiptir.
        </p>
        <p id="s3-6-3">
          <span class="font-semibold">Misafir Rolü :</span>Pano üzerinde salt
          okunur yetkiye sahiptir.
        </p>
        <p id="s3-7">
          Panolar oluşturulduktan sonra oluşturulan panolar proje altında ve
          proje ana sayfasında listelenir . (Resim - 11/1 ve Resim - 11/2)
        </p>
        <myImage imgName="Resim 11/1" imgPath="Resim11-1.svg"></myImage>
        <myImage imgName="Resim 11/2" imgPath="Resim11-2.svg"></myImage>
        <h1 id="s3-8" class="font-semibold text-lg py-4">Pano Ana Sayfa</h1>
        <p id="s3-8-1">
          Oluşturulan pano üzerine tıklandığı zaman Pano Ana Sayfası
          görüntülenir. (Resim-12)
        </p>
        <myImage imgName="Resim 12" imgPath="Resim12.svg"></myImage>
        <p id="s3-8-2">
          Pano ana sayfasının üst kısmında pano yönetiminin yapılabildiği ve
          görevlerin filtrelenebildiği araç çubukları bulunur. Bu araç
          çubuklarında bulunan fonksiyonlar aşağıda açklanmıştır.
        </p>
        <div class="px-6">
          <span class="flex flex-row items-start py-2">
            <y-icon class="pr-1 pt-1" name="yi yi-star"> </y-icon>
            <p>: Panoyu fovorilere ekler.</p>
          </span>
          <span class="flex flex-row items-start py-2">
            <y-icon class="pr-1 pt-1 flex" name="yi yi-info"> </y-icon>
            <p>
              : Pano detayını görüntüler (Resim-13). Bu ekranda kartların
              tamamlanma durumu , zamanı geçmiş kartlar, pano sahibi ve
              aktiviteler gibi bilgiler görüntülenir.
            </p>
          </span>
          <myImage imgName="Resim 13" imgPath="Resim13.svg"></myImage>
          <p>
            · Araç çubuğunun sağ tarafında bulunan "<y-icon name="yi yi-more">
            </y-icon
            >" simgesine kullanıcıların pano üzerinde işlem ve değişikli
            yapmalarını sağlayan menuyu açar (Resim-14). Menu opsiyonlarının
            kullanım detayları aşağıda anlatılmıştır.
          </p>
          <myImage imgName="Resim 14" imgPath="Resim14.svg"></myImage>
          <p>
            <span class="font-semibold">Manage Labels :</span> Kartlara
            eklenebilen etiketlerin (labels) yönetildiği alandır (Resim-15).
            Değişik etiketler kullanarak kartları gruplayabili ve görünürlüğü
            artırabilirsiniz.
          </p>
          <myImage imgName="Resim 15" imgPath="Resim15.svg"></myImage>
          <span class="flex flex-row items-start py-2">
            <y-icon class="pr-1 pt-1 flex" name="yi yi-rename"> </y-icon>
            <p>: Etiketin ismini veya rengini değiştirmek için.</p>
          </span>
          <span class="flex flex-row items-start py-2">
            <y-icon class="pr-1 pt-1 flex" name="yi yi-trash"> </y-icon>
            <p>: Etiketi silmek için kullanılır.</p>
          </span>
          <span class="flex flex-row items-start py-2">
            <img class="pr-1" src="../assets/icons/createNew.svg" />
            <p>: Yeni bir etiket eklemek için kullanılır.</p>
          </span>
          <p class="py-2">
            <span class="font-semibold">Save As WorkFlow :</span>
            Kişiselleştirdiğiniz pano iş akışını şablon alarak kaydedip daha
            sonra oluşturacağınız panolara uygulayabilirsiniz.
          </p>
          <p class="py-2">
            <span class="font-semibold">Copy Board Link :</span> Pano linkini
            kopyalar.
          </p>
          <p class="py-2">
            <span class="font-semibold">Duplicate Board :</span> Panonun bir
            kopyasını oluşturur. Oluşturulan kopya pano proje içinde sonunda
            pano_ismi+copy şeklinde listelenir.
          </p>
          <p class="py-2">
            <span class="font-semibold">Copy Board :</span> Panoyu başka bir
            projenin altına kopyalamak için kullanılır (Resim-16).
          </p>
          <myImage imgName="Resim 16" imgPath="Resim16.svg"></myImage>
          <p class="py-2">
            Copy Board seçeneğine tıklandıktan sonra gelen ekranda panonun
            kopyalanacağı proje seçilerek copy butonuna tıklanır.
          </p>
          <p class="py-2">
            <span class="font-semibold">Move Board :</span> Panoyu başka bir
            projenin altına taşımak için kullanılır (Resim-17).
          </p>
          <myImage imgName="Resim 17" imgPath="Resim17.svg"></myImage>
          <p class="py-2">
            Move Board seçeneğine tıklandıktan sonra gelen ekranda panonun
            kopyalanacağı proje seçilerek move butonuna tıklanır.
          </p>
          <p class="py-2">
            <span class="font-semibold">Archived Items :</span> Pano içinde
            arşive taşınmış nesnelerin listelendiği ve yönetildiği alandır. Bu
            alan kullanılarak nesneler arşivden çıkartılabilir yada silinebilir
            (Resim-18).
          </p>
          <myImage imgName="Resim 18" imgPath="Resim18.svg"></myImage>
          <span class="flex flex-row items-start py-2">
            <y-icon class="pr-1" name="yi yi-unarchive"> </y-icon>
            <p>: Nesneyi arşivden çıkarmak için kullanılır.</p>
          </span>
          <span class="flex flex-row items-start py-2">
            <y-icon class="pr-1" name="yi yi-delete"> </y-icon>
            <p>: Nesneyi silmek için kullanılır.</p>
          </span>

          <p class="py-2">
            <span class="font-semibold">Delete Board :</span> Panoyu siler.
            Panonun yanlışlıkla silinmesini önlemek için pano silme ekranında
            teyit amaçlı pano adının girilmesi gereklidir (Resim-19).
          </p>
          <myImage imgName="Resim 19" imgPath="Resim19.svg"></myImage>
          <p class="py-2">
            <span class="font-semibold">Invite Member :</span> Panoya kullanıcı
            eklemek , çıkarmak yada kullanıcının pano üzerindeki yetkisini
            değiştirmek için kullanılır (Resim-20 ).
          </p>
          <myImage imgName="Resim 20" imgPath="Resim20.svg"></myImage>
          <p class="py-2">
            <span class="font-semibold">Share with this permission :</span>
            Eklenecek kullanıcının yetkisini belirlemek için kullanılır.
            Kullanıcı yetkisi; kullanıcı eklendikten sonra da değiştirilebilir.
          </p>
          <p class="py-2">
            Aranan kullanıcıya ait bilgi "Search User" alanına yazılarak arama
            yapılır ve kullanıcı bulunduktan sonra eklenir.
          </p>
          <p class="py-2">
            Kullanıcının mevcut yetkisinin üzerine tıklanarak açılan menüden
            kullanıcıya yeni yetki atanabilir(Resim-21).
          </p>
          <myImage imgName="Resim 21" imgPath="Resim21.svg"></myImage>
          <span class="flex flex-row items-start py-2">
            <img src="../assets/icons/yuvarlakCarp.svg" />
            <p>: simgesine tıklanarak kullanıcı panodan çıkartılabilir.</p>
          </span>
        </div>
        <p id="s3-8-3">
          Pano araç çubuğunun altında pano içinde bulunan kartların
          filtrelenebileceği filtreleme araç çubuğu bulunur (Resim-22).
        </p>
        <myImage imgName="Resim 22" imgPath="Resim22.svg"></myImage>
        <h1 id="s3-9" class="font-semibold text-lg py-4">
          İş Listeleri (Sütunlar)
        </h1>
        <p id="s3-9-1">
          Panonun üzerine tıklanınca pano içeriği görüntülenir. Pano
          oluşturulurken kullanılan şablona göre pano içeriği görüntülenir.
        </p>
        <p id="s3-9-2">
          Varsayılan pano düzeni backlog, in_progres, checked,done,cancelled
          sütunlarından oluşur (Resim-23).
        </p>
        <myImage imgName="Resim 23" imgPath="Resim23.svg"></myImage>
        <p id="s3-9-3">
          Eğer pano oluşturulurken tema olarak Standart seçilmiş ve varsayılan
          iş listesinde bulunmayan bir iş listesi (sütun) eklenmek isteniyorsa
          yeni bir liste eklenebilir.
        </p>
        <p id="s3-9-4">
          <img
            class="p-1 inline-block"
            src="../assets/icons/add-column-button.svg"
          />simgesine tıklanarak panoya yeni iş listesi (sütun) eklenebilir.
          Sütun eklemek için sütun adı girilir ve
          <img class="p-1 inline-block" src="../assets/icons/save_button.png" />
          butonuna tıklanır. (Resim - 24)
        </p>
        <myImage imgName="Resim 24" imgPath="Resim24.svg"></myImage>
        <p id="s3-9-5">
          Oluşturulan sütunların yerleri sürükle-bırak yapılarak
          değiştirilebilir.
        </p>
        <h1 id="s3-10" class="font-semibold text-lg py-4">Kartlar</h1>
        <p id="s3-10-1">
          İş listeleri (sütunlar) iş kartlarından oluşur. Varsayılan olarak
          sütunlar boş olarak gelir. Kullanıcılar istedikleri sütuna istedikleri
          kadar iş kartı oluşturabilir.
        </p>
        <p id="s3-10-2">
          Bir sütuna kart eklemek için sütundaki
          <img
            class="p-1 inline-block"
            src="../assets/icons/add-task-button.svg"
          />
          butonuna tıklanır ve kart ismi yazılarak Enter tuşuna basılır.
        </p>
        <p id="s3-10-3">
          Kart üzerinde bulunan simgesinin üzerine tıklanarak kart üzerinde
          işlem yapılmasını sağlayan menü açılır (Resim-25).
        </p>
        <myImage imgName="Resim 25" imgPath="Resim25.svg"></myImage>
        <div class="flex justify-center">
          <p>
            <span class="font-semibold">· Open :</span> Kartı açar <br />·
            <span class="font-semibold">Change Color :</span>
            Kartın başlık rengini değiştirir.<br />
            <span class="font-semibold">· Complate :</span>· Complate : Kartı
            “Tamamlandı” olarak işaretler<br />
            <span class="font-semibold">· Rename :</span>Kartı yeniden
            adlandırı.<br />
            <span class="font-semibold">· Move To :</span>Kartı başaka bir proje
            altına taşır<br />
            <span class="font-semibold">· Copy To :</span>Kartı başaka bir
            projeye kopyalar.<br />
            <span class="font-semibold">· Duplicate:</span>Kartın bir kopyasını
            oluşturur.<br />
            <span class="font-semibold">· Archive :</span>Kartı arşive taşır.<br />
            <span class="font-semibold">· Delete :</span>Kartı siler.
          </p>
        </div>
        <p id="s3-10-4 ">
          Oluşturulan kartın üzerine yada menüde Open tıklanınca kart detay
          ekranı açılır (Resim-26).
        </p>
        <myImage imgName="Resim 26" imgPath="Resim26.svg"></myImage>
        <p>
          Bu ekranda bulunan fonksiyonlar aşağıda maddeler halinde
          anlatılacaktır.
        </p>
        <p class="px-4">
          ·
          <img
            class="p-2 inline-block scale-125"
            src="../assets/icons/backlog_button.svg"
          />butonu, kartı sütunlar (iş listesi) arasında taşımak için
          kullanılır. Bu düğmeye tıklanarak açılan listede kart hangi sütuna
          taşınmak isteniyorsa seçilir (Resim-27).
        </p>
        <myImage imgName="Resim 27" imgPath="Resim27.svg"></myImage>
        <div class="px-4">
          <span class="flex flex-row items-center py-2"
            ><img
              class="scale-125 px-2"
              src="../assets/icons/matkComplate.svg"
            />
            <p>: Kartı tamamlandı olarak işaretlemek için kullanılır.</p></span
          >
          <span class="flex flex-row items-center py-2"
            ><img src="../assets/icons/join.svg" />
            <p>: Kişinin kendisi karta eklemesini sağlar.</p></span
          >
          <span class="flex flex-row items-center py-2"
            ><img src="../assets/icons/palette.svg" />
            <p>
              : Kartın başlık rengini değiştirmek için renk paletini açar.
            </p></span
          >
          <span class="flex flex-row items-center py-2"
            ><img src="../assets/icons/attach.svg" />
            <p>: Karta eklenmiş dosya sayısını ve dosyaları gösterir.</p></span
          >
          <span class="flex flex-row items-center py-2"
            ><img src="../assets/icons/assignee.svg" />
            <p>
              : Panoya eklenmiş kullanıcıların karta (işe) eklenmesi için
              kullanılır.
            </p></span
          >
          <p>
            simgesine tıklanarak açılan kullanıcı listesinden kullanıcılar
            seçilir ve karta eklenir (Resim-28).
          </p>
          <myImage imgName="Resim 28" imgPath="Resim28.svg"></myImage>
          <span class="flex flex-row items-start py-2">
            <img src="../assets/icons/deadline.svg" />
            <p>
              : Kartta tanımlanan işe bir bitiş tarihi eklemek için kullanılır.
            </p>
          </span>
          <span class="flex flex-row items-start py-2">
            <img src="../assets/icons/noDeadline.svg" />
            <p>
              : Butona tıklanarak açılan takvimden gerekli tarih ve saat
              seçilerek
            </p>
          </span>
          <p>karta eklenir (Resim-29).</p>
          <myImage imgName="Resim 29" imgPath="Resim29.svg"></myImage>
          <span class="flex flex-row items-start py-2">
            <img src="../assets/icons/description.svg" />
            <p>: Karta açıklama eklemek için kullanılan alandır. Simgenin</p>
          </span>
          <p>altında bulunan metin kutusuna gerekli açıklamalar yazılabilir.</p>
          <span class="flex flex-row items-start py-2">
            <img src="../assets/icons/attachment.svg" />
            <p>: Karta dosya eklemek için kullanılır.+ simgesine tıklanarak</p>
          </span>
          <p>
            açılan ekrandan eklenmek istenen dosya seçilerek karta eklenebilir
            (Resim-30).
          </p>
          <myImage imgName="Resim 30" imgPath="Resim30.svg"></myImage>
          <p class="px-6">
            Ekler yanlarında bulunan "<y-icon name="yi yi-more"> </y-icon>"
            simgesine tıklanarak açılan menuden bilgisayara indirelebilir yada
            silinebilir.
          </p>
          <span class="flex flex-row items-center py-2">
            <img src="../assets/icons/checklist.svg" />
            <p>
              : Kart içinde yapılacaklar listesi oluşturmak için kullanılır.
            </p>
          </span>
          <span class="flex flex-row items-center py-2">
            <img src="../assets/icons/newChecklist.svg" />
            <p>: Simgesine tıklanarak listeye bir isim verilir.</p>
          </span>
          <span class="flex flex-row items-center py-2">
            <img src="../assets/icons/addChecklist.svg" />
            <p>: Butonuna tıklanarak yapılacaklar eklenir(Resim-31).</p>
          </span>
          <myImage imgName="Resim 31" imgPath="Resim31.svg"></myImage>
          <span class="flex flex-row items-center py-2">
            <img src="../assets/icons/person.svg" />
            <p>: Eklenen her bir maddeye kişi atamak için kullanılır.</p>
          </span>
          <span class="flex flex-row items-center py-2">
            <img src="../assets/icons/flag.svg" />
            <p>: Her maddeye ayrı ayrı bitiş tarihi eklemek için kullnılır.</p>
          </span>
          <span class="flex flex-row items-center py-2">
            <img src="../assets/icons/etiket.svg" />
            <p>: Etiket eklemek için kullanılır.</p>
          </span>
        </div>
      </span>
    </div>
    <div id="drawer" class="w-1/4">
      <div class="fixed w-64 h-full">
        <y-navigation-drawer class="bottom-0 h-auto sticky top-[64px]" open>
          <y-dropdown-drawer-item
            class="border-y gap-1"
            @click="scrollToElement('s1')"
          >
            <p class="font-bold text-lg">Anasayfa İşlemleri</p>
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            @click="scrollToElement('s1-1')"
          >
            Projeye Erişim
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s1-2')"
          >
            Ana Ekran
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1 border-y"
            @click="scrollToElement('s2')"
          >
            <p class="font-bold text-lg">Proje İşlemleri</p>
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            @click="scrollToElement('s2-1')"
          >
            Proje Oluşturma
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s2-3')"
          >
            Proje Özelleştirme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s2-3')"
          >
            Proje Listeleme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s2-4')"
          >
            Menü Seçenekleri
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s2-5')"
          >
            Pano gereksinimi
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="border-y gap-1"
            @click="scrollToElement('s3')"
          >
            <p class="font-bold text-lg">Pano İşlemleri</p>
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item class="gap-1" prefix="yi  yi-minus">
            Pano Oluşturma
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-2')"
          >
            Pano Özelleştirme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-3')"
          >
            Workflow
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-3-1')"
          >
            Şablon Ekleme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-4')"
          >
            Proje
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-5')"
          >
            Kullanıcılar
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-6-1')"
          >
            Kullanıcı Rolü </y-dropdown-drawer-item
          ><y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-6-2')"
          >
            Yöneetici Rolü </y-dropdown-drawer-item
          ><y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-6-3')"
          >
            Misafir Rolü
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-7')"
          >
            Pano Listesi
          </y-dropdown-drawer-item>

          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-8')"
          >
            Pano Ana Sayfa
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-8-1')"
          >
            Görüntüleme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-8-2')"
          >
            Pano Araçları
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-8-3')"
          >
            Kart Filtreleme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-9-1')"
          >
            İş Listeleri (Sütunlar)
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-9')"
          >
            Pano İçeriği Görüntüleme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-9-2')"
          >
            Varsayılan Pano Düzeni
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-9-3')"
          >
            Varsayılan Sütun Ekleme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-9-4')"
          >
            Sütun Ekleme İşlemi
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-9-5')"
          >
            Yer Değiştirme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-10')"
          >
            Kart
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-10-1')"
          >
            Kart Nedir
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-10-2')"
          >
            Kart Ekleme
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-10-3')"
          >
            Kart İşlemleri
          </y-dropdown-drawer-item>
          <y-dropdown-drawer-item
            class="gap-1"
            prefix="yi yi-minus"
            postfix="yi yi-arrow-right"
            @click="scrollToElement('s3-10-4')"
          >
            Kart Detay Ekranı
          </y-dropdown-drawer-item>
        </y-navigation-drawer>
      </div>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import { scrollTo } from "vue-scrollto";
import myImage from "../components/myImage.vue";
const model = ref([
  { link: "/email", name: "İnstallition" },
  { link: "/email", name: "Sending" },
  { link: "/email", name: "Mailbox using" },
  { link: "/email", name: "Error massages" },
]);

const selected = ref(model.value[0].link);
document.addEventListener("DOMContentLoaded", function () {
  const paragraphs = document.getElementsByTagName("p");
  const data = [];

  for (let i = 0; i < paragraphs.length; i++) {
    data.push({
      id: i,
      text: paragraphs[i].textContent,
    });
  }
  const json = JSON.stringify(data);
  console.log(json);
});

const clicked = () => {
  console.log(selected.value.link);
};

const scrollToElement = (elementId) => {
  scrollTo("#" + elementId, 500, {
    easing: "ease-in-out",
    offset: -70,
  });
};
</script>
