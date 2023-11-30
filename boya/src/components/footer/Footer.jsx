import Image from "next/image";
import style from "./_footer.module.scss";
import logo from "@/../../public/images/logo.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <div className={style.logo}>
              <Image src={logo} />
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className={style.list}>
              <h4>Information</h4>
              <ul className={style.listmenu}>
                <li>
                  <Link href="#">Main</Link>
                </li>
                <li>
                  <Link href="#">Gallery</Link>
                </li>
                <li>
                  <Link href="#">Projects</Link>
                </li>
                <li>
                  <Link href="#">Certifications</Link>
                </li>
                <li>
                  <Link href="/contacts">Contacts</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className={style.list}>
              <h4>Contacts</h4>
              <ul className={style.listmenu}>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                    >
                      <path
                        d="M2.19564 9.2492L2.20095 9.25698L6.1875 15.1116L10.1741 9.25698L10.1794 9.2492L10.185 9.24161C10.9238 8.23991 11.2598 6.879 11.1746 5.5225C11.0894 4.16584 10.5867 2.86989 9.72008 1.98859C7.76829 0.00382428 4.60705 0.00377946 2.65492 1.98859L2.19564 9.2492ZM2.19564 9.2492L2.19005 9.24161M2.19564 9.2492L2.19005 9.24161M2.19005 9.24161C1.45122 8.23991 1.11525 6.879 1.20041 5.5225M2.19005 9.24161L1.20041 5.5225M1.20041 5.5225C1.28558 4.16585 1.78827 2.86991 2.6549 1.98862L1.20041 5.5225ZM3.92557 5.53836C3.92557 6.82627 4.95429 7.88453 6.24106 7.88453C7.52782 7.88453 8.55655 6.82627 8.55655 5.53836C8.55655 4.25045 7.52782 3.19219 6.24106 3.19219C4.95429 3.19219 3.92557 4.25045 3.92557 5.53836Z"
                        stroke="white"
                      />
                    </svg>
                    1234 Sample Street
                    <br />
                    Austin Texas 78704
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                    >
                      <mask id="path-1-inside-1_171_3857" fill="white">
                        <path d="M16.6903 12.6271C16.7242 12.887 16.645 13.113 16.453 13.305L14.1988 15.5422C14.0971 15.6552 13.9643 15.7514 13.8005 15.8304C13.6367 15.9095 13.4757 15.9604 13.3175 15.9829C13.3062 15.9829 13.2723 15.9858 13.2157 15.9915C13.1593 15.9971 13.0859 16 12.9955 16C12.7807 16 12.4332 15.9633 11.953 15.8898C11.4728 15.8163 10.8853 15.6355 10.1904 15.3474C9.49537 15.0593 8.70726 14.627 7.82594 14.0508C6.94461 13.4746 6.00673 12.6836 5.01238 11.6779C4.22142 10.8983 3.56606 10.1525 3.04628 9.44068C2.52651 8.72879 2.10843 8.0706 1.79205 7.46608C1.47563 6.86156 1.23835 6.31354 1.08015 5.82202C0.921963 5.33049 0.814618 4.90677 0.758121 4.55083C0.701624 4.1949 0.679025 3.91524 0.690325 3.71185C0.701624 3.50847 0.707274 3.39547 0.707274 3.37287C0.729873 3.21468 0.78072 3.05366 0.859816 2.88982C0.938912 2.72598 1.03496 2.59321 1.14795 2.49152L3.40219 0.237287C3.56038 0.0790958 3.74117 0 3.94456 0C4.09145 0 4.22139 0.0423728 4.33439 0.127118C4.44738 0.211864 4.54343 0.316383 4.62252 0.440677L6.43608 3.88135C6.53778 4.06214 6.56602 4.25988 6.52083 4.47456C6.47563 4.68925 6.37958 4.87004 6.23269 5.01694L5.40218 5.84744C5.37958 5.87004 5.35981 5.90676 5.34286 5.95761C5.32591 6.00846 5.31744 6.05083 5.31744 6.08473C5.36264 6.32202 5.46433 6.5932 5.62252 6.89829C5.75812 7.16947 5.96715 7.49998 6.24964 7.88981C6.53213 8.27964 6.93325 8.72876 7.45303 9.23724C7.9615 9.75706 8.41348 10.161 8.80896 10.4492C9.20436 10.7372 9.53498 10.9491 9.80051 11.0847C10.066 11.2203 10.2694 11.3022 10.4107 11.3304L10.6225 11.3728C10.6451 11.3728 10.6819 11.3643 10.7327 11.3474C10.7835 11.3304 10.8202 11.3106 10.8429 11.288L11.8089 10.305C12.0124 10.1242 12.2496 10.0338 12.5208 10.0338C12.713 10.0338 12.8654 10.0677 12.9784 10.1355H12.9953L16.2665 12.0677C16.5039 12.2147 16.6451 12.4011 16.6903 12.6271Z" />
                      </mask>
                      <path
                        d="M16.6903 12.6271L17.6819 12.4977L17.6775 12.4641L17.6709 12.4309L16.6903 12.6271ZM16.453 13.305L17.1574 14.0148L17.1602 14.0121L16.453 13.305ZM14.1988 15.5422L13.4944 14.8325L13.4744 14.8523L13.4555 14.8733L14.1988 15.5422ZM13.8005 15.8304L13.3661 14.9297L13.3656 14.9299L13.8005 15.8304ZM13.3175 15.9829V16.9829H13.3885L13.4588 16.9729L13.3175 15.9829ZM13.2157 15.9915L13.3149 16.9866L13.3152 16.9865L13.2157 15.9915ZM10.1904 15.3474L10.5734 14.4237L10.5734 14.4237L10.1904 15.3474ZM7.82594 14.0508L8.37316 13.2138L8.37314 13.2138L7.82594 14.0508ZM5.01238 11.6779L5.72354 10.9748L5.71438 10.9658L5.01238 11.6779ZM3.04628 9.44068L2.23865 10.0304L2.23867 10.0304L3.04628 9.44068ZM1.79205 7.46608L2.67804 7.00238L2.67802 7.00235L1.79205 7.46608ZM0.707274 3.37287L-0.282676 3.23145L-0.292726 3.3018V3.37287H0.707274ZM1.14795 2.49152L1.81692 3.23481L1.83646 3.21722L1.85506 3.19863L1.14795 2.49152ZM3.40219 0.237287L4.10929 0.944395V0.944395L3.40219 0.237287ZM4.62252 0.440677L5.50716 -0.025609L5.48811 -0.0617409L5.46618 -0.0961993L4.62252 0.440677ZM6.43608 3.88135L5.55145 4.34763L5.55781 4.35971L5.56451 4.37161L6.43608 3.88135ZM6.23269 5.01694L5.52558 4.30983L5.52558 4.30983L6.23269 5.01694ZM5.40218 5.84744L6.10929 6.55455L6.10929 6.55455L5.40218 5.84744ZM5.31744 6.08473H4.31744V6.17912L4.3351 6.27184L5.31744 6.08473ZM5.62252 6.89829L6.51695 6.45107L6.51366 6.4445L6.51028 6.43797L5.62252 6.89829ZM7.45303 9.23724L8.1679 8.53798L8.1602 8.5301L8.15232 8.5224L7.45303 9.23724ZM8.80896 10.4492L8.22003 11.2573L8.22017 11.2574L8.80896 10.4492ZM10.4107 11.3304L10.6069 10.3498L10.6062 10.3497L10.4107 11.3304ZM10.6225 11.3728L10.4262 12.3533L10.5234 12.3728H10.6225V11.3728ZM10.7327 11.3474L11.0487 12.2961L11.0493 12.2959L10.7327 11.3474ZM10.8429 11.288L11.55 11.9952L11.5561 11.9889L10.8429 11.288ZM11.8089 10.305L11.1448 9.55733L11.1195 9.57986L11.0957 9.60405L11.8089 10.305ZM12.9784 10.1355L12.4638 10.9929L12.7013 11.1355H12.9784V10.1355ZM12.9953 10.1355L13.5039 9.2745L13.2686 9.13551H12.9953V10.1355ZM16.2665 12.0677L16.793 11.2175L16.7841 11.212L16.7751 11.2067L16.2665 12.0677ZM15.6987 12.7565C15.6974 12.7464 15.6958 12.709 15.7126 12.6611C15.7289 12.6144 15.7501 12.5938 15.7458 12.598L17.1602 14.0121C17.5621 13.61 17.7577 13.0786 17.6819 12.4977L15.6987 12.7565ZM15.7486 12.5953L13.4944 14.8325L14.9032 16.252L17.1574 14.0148L15.7486 12.5953ZM13.4555 14.8733C13.4553 14.8735 13.4502 14.8792 13.4367 14.8889C13.423 14.8989 13.4005 14.9131 13.3661 14.9297L14.2349 16.7311C14.4937 16.6063 14.7385 16.4375 14.9421 16.2112L13.4555 14.8733ZM13.3656 14.9299C13.2818 14.9704 13.2195 14.9868 13.1762 14.993L13.4588 16.9729C13.7319 16.9339 13.9915 16.8486 14.2354 16.7309L13.3656 14.9299ZM13.3175 14.9829C13.2429 14.9829 13.1444 14.9936 13.1163 14.9964L13.3152 16.9865C13.328 16.9852 13.3388 16.9842 13.3478 16.9833C13.357 16.9825 13.3634 16.9819 13.3677 16.9815C13.3698 16.9814 13.3709 16.9813 13.3713 16.9812C13.3717 16.9812 13.3707 16.9813 13.3685 16.9814C13.3665 16.9816 13.3617 16.9819 13.3549 16.9822C13.3514 16.9823 13.3466 16.9825 13.3408 16.9826C13.3352 16.9828 13.3272 16.9829 13.3175 16.9829V14.9829ZM13.1166 14.9964C13.106 14.9975 13.0689 15 12.9955 15V17C13.1028 17 13.2126 16.9967 13.3149 16.9866L13.1166 14.9964ZM12.9955 15C12.8631 15 12.5808 14.9742 12.1043 14.9013L11.8018 16.8783C12.2857 16.9523 12.6984 17 12.9955 17V15ZM12.1043 14.9013C11.7345 14.8447 11.2297 14.6958 10.5734 14.4237L9.80742 16.2712C10.5408 16.5752 11.2111 16.7879 11.8018 16.8783L12.1043 14.9013ZM10.5734 14.4237C9.95334 14.1666 9.22148 13.7685 8.37316 13.2138L7.27871 14.8878C8.19305 15.4856 9.03741 15.952 9.80743 16.2712L10.5734 14.4237ZM8.37314 13.2138C7.56725 12.6869 6.68387 11.9462 5.72348 10.9748L4.30128 12.381C5.32959 13.421 6.32197 14.2623 7.27873 14.8878L8.37314 13.2138ZM5.71438 10.9658C4.95248 10.2147 4.33489 9.5097 3.8539 8.85097L2.23867 10.0304C2.79722 10.7953 3.49037 11.5818 4.31038 12.3901L5.71438 10.9658ZM3.85392 8.851C3.3554 8.16822 2.96596 7.55251 2.67804 7.00238L0.906053 7.92978C1.2509 8.58869 1.69762 9.28936 2.23865 10.0304L3.85392 8.851ZM2.67802 7.00235C2.38018 6.4333 2.16829 5.9389 2.03207 5.51565L0.12824 6.12838C0.308408 6.68819 0.571094 7.28983 0.90607 7.92981L2.67802 7.00235ZM2.03207 5.51565C1.88349 5.05399 1.79158 4.68278 1.74576 4.39407L-0.229514 4.7076C-0.162348 5.13075 -0.0395605 5.607 0.12824 6.12838L2.03207 5.51565ZM1.74576 4.39407C1.69329 4.06355 1.68333 3.86558 1.68879 3.76732L-0.308136 3.65638C-0.325276 3.96491 -0.290045 4.32626 -0.229514 4.7076L1.74576 4.39407ZM1.68879 3.76732C1.69881 3.58687 1.70727 3.43174 1.70727 3.37287H-0.292726C-0.292726 3.35422 -0.292067 3.34471 -0.292918 3.36514C-0.293459 3.37811 -0.294364 3.39759 -0.295716 3.42463C-0.298403 3.47838 -0.302521 3.55533 -0.308136 3.65638L1.68879 3.76732ZM1.69722 3.51429C1.70343 3.47088 1.71989 3.40842 1.76037 3.32457L-0.0407352 2.45507C-0.158447 2.6989 -0.243679 2.95848 -0.282676 3.23145L1.69722 3.51429ZM1.76037 3.32457C1.77708 3.28995 1.79141 3.26729 1.8014 3.25349C1.81121 3.23992 1.81682 3.2349 1.81692 3.23481L0.478987 1.74822C0.252514 1.95205 0.0839299 2.19684 -0.0407352 2.45507L1.76037 3.32457ZM1.85506 3.19863L4.10929 0.944395L2.69508 -0.46982L0.440845 1.78441L1.85506 3.19863ZM4.10929 0.944395C4.11192 0.941771 4.09532 0.958821 4.05724 0.975479C4.01733 0.99294 3.97649 1 3.94456 1V-1C3.44818 -1 3.02022 -0.794955 2.69508 -0.46982L4.10929 0.944395ZM3.94456 1C3.92058 1 3.88451 0.996318 3.84216 0.98251C3.7994 0.968564 3.76267 0.948327 3.73439 0.927119L4.93439 -0.672882C4.64102 -0.892907 4.29854 -1 3.94456 -1V1ZM3.73439 0.927119C3.74685 0.936463 3.76164 0.950493 3.77886 0.977553L5.46618 -0.0961993C5.32521 -0.317726 5.14792 -0.512735 4.93439 -0.672882L3.73439 0.927119ZM3.73789 0.906963L5.55145 4.34763L7.32071 3.41506L5.50716 -0.025609L3.73789 0.906963ZM5.56451 4.37161C5.55701 4.35828 5.54765 4.3351 5.54359 4.30666C5.53965 4.27912 5.54318 4.26425 5.54228 4.26855L7.49938 4.68057C7.59141 4.24342 7.53555 3.79622 7.30766 3.39108L5.56451 4.37161ZM5.54228 4.26855C5.53761 4.2907 5.53277 4.30014 5.53178 4.30202C5.53099 4.3035 5.52993 4.30548 5.52558 4.30983L6.9398 5.72404C7.23173 5.43211 7.41657 5.07389 7.49938 4.68057L5.54228 4.26855ZM5.52558 4.30983L4.69508 5.14033L6.10929 6.55455L6.9398 5.72404L5.52558 4.30983ZM4.69508 5.14033C4.51227 5.32314 4.43114 5.53049 4.39418 5.64138L6.29154 6.27384C6.2867 6.28838 6.27462 6.32194 6.25087 6.36604C6.22785 6.4088 6.18409 6.47975 6.10929 6.55455L4.69508 5.14033ZM4.39418 5.64138C4.36059 5.74214 4.31744 5.89958 4.31744 6.08473H6.31744C6.31744 6.14869 6.30972 6.19692 6.30437 6.22364C6.29882 6.2514 6.29321 6.26884 6.29154 6.27384L4.39418 5.64138ZM4.3351 6.27184C4.40429 6.63509 4.54916 7.00065 4.73477 7.3586L6.51028 6.43797C6.3795 6.18575 6.32098 6.00895 6.29978 5.89762L4.3351 6.27184ZM4.7281 7.3455C4.89793 7.68516 5.14168 8.06506 5.43989 8.47659L7.05939 7.30303C6.79263 6.9349 6.6183 6.65378 6.51695 6.45107L4.7281 7.3455ZM5.43989 8.47659C5.76769 8.92895 6.21179 9.42191 6.75373 9.95207L8.15232 8.5224C7.65472 8.03562 7.29656 7.63033 7.05939 7.30303L5.43989 8.47659ZM6.73816 9.93649C7.26881 10.479 7.76374 10.9248 8.22003 11.2573L9.39789 9.64097C9.06322 9.39709 8.65419 9.03513 8.1679 8.53798L6.73816 9.93649ZM8.22017 11.2574C8.63475 11.5594 9.01337 11.8056 9.34573 11.9753L10.2553 10.1941C10.0566 10.0926 9.77396 9.91491 9.39775 9.64087L8.22017 11.2574ZM9.34573 11.9753C9.6251 12.118 9.93108 12.2544 10.2151 12.3111L10.6062 10.3497C10.6192 10.3523 10.5964 10.3487 10.5257 10.3202C10.4595 10.2935 10.3703 10.2528 10.2553 10.1941L9.34573 11.9753ZM10.2144 12.3109L10.4262 12.3533L10.8188 10.3923L10.6069 10.3498L10.2144 12.3109ZM10.6225 12.3728C10.8235 12.3728 10.9978 12.3131 11.0487 12.2961L10.4166 10.3986C10.4098 10.4009 10.4199 10.3972 10.4421 10.392C10.4538 10.3893 10.4739 10.3851 10.5005 10.3813C10.5257 10.3777 10.5683 10.3728 10.6225 10.3728V12.3728ZM11.0493 12.2959C11.1595 12.2591 11.367 12.1781 11.55 11.9951L10.1357 10.5809C10.2106 10.5061 10.2816 10.4623 10.3243 10.4393C10.3683 10.4156 10.4017 10.4036 10.416 10.3988L11.0493 12.2959ZM11.5561 11.9889L12.5222 11.0059L11.0957 9.60405L10.1296 10.5871L11.5561 11.9889ZM12.473 11.0526C12.4826 11.0441 12.489 11.0399 12.4919 11.0381C12.4934 11.0371 12.4944 11.0366 12.4948 11.0364C12.4953 11.0362 12.4955 11.0361 12.4955 11.0361C12.4955 11.0361 12.4956 11.036 12.496 11.0359C12.4964 11.0358 12.4973 11.0356 12.4988 11.0353C12.5018 11.0348 12.5088 11.0338 12.5208 11.0338V9.03382C12.0036 9.03382 11.5304 9.21479 11.1448 9.55733L12.473 11.0526ZM12.5208 11.0338C12.5599 11.0338 12.5714 11.0374 12.5624 11.0354C12.5526 11.0332 12.5148 11.0235 12.4638 10.9929L13.4931 9.27811C13.1691 9.08365 12.8162 9.03382 12.5208 9.03382V11.0338ZM12.9784 11.1355H12.9953V9.13551H12.9784V11.1355ZM12.4868 10.9965L15.7579 12.9287L16.7751 11.2067L13.5039 9.2745L12.4868 10.9965ZM15.74 12.9179C15.7739 12.9389 15.7699 12.9435 15.7534 12.9217C15.7451 12.9108 15.7357 12.8957 15.7272 12.877C15.7187 12.8582 15.713 12.8397 15.7097 12.8233L17.6709 12.4309C17.5601 11.8772 17.212 11.477 16.793 11.2175L15.74 12.9179Z"
                        fill="white"
                        mask="url(#path-1-inside-1_171_3857)"
                      />
                    </svg>
                    512.333.2222
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="11"
                      viewBox="0 0 17 11"
                      fill="none"
                    >
                      <path
                        d="M8.82695 6.16166L8.82693 6.16163L8.82262 6.16456C8.79484 6.18343 8.75444 6.19696 8.711 6.19696H8.70758C8.64401 6.19696 8.60326 6.17544 8.59005 6.1642L8.58936 6.16361L1.78735 0.4H15.6233L9.1372 5.90252L9.13682 5.90285L8.85187 6.1452L8.85099 6.14579L8.82695 6.16166ZM10.7221 6.48934L15.6987 10.6H1.67138L6.65875 6.45877L7.65151 7.30051L7.6526 7.30143C7.94556 7.54803 8.32201 7.67805 8.70985 7.67805C9.0974 7.67805 9.47405 7.54692 9.76713 7.29972L9.76803 7.29895L10.7221 6.48934ZM5.51741 5.4915L1.0875 9.17041V1.73773L5.51741 5.4915ZM16.2875 1.76878V9.17559L11.864 5.52124L16.2875 1.76878Z"
                        stroke="white"
                        stroke-width="0.8"
                      />
                    </svg>
                    sampleemail@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-3">
            <div className={style.list}>
              <h4>Social Media</h4>
              <ul className={style.sosiallist}>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="11"
                      height="19"
                      viewBox="0 0 11 19"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_171_3829)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M6.82448 18.9929H2.73348V9.49891H0.688477V6.22591H2.73348V4.26191C2.73348 1.59291 3.88848 0.00390625 7.16648 0.00390625H9.89648V3.27691H8.19148C6.91348 3.27691 6.82948 3.73491 6.82948 4.58891L6.82448 6.22591H9.91648L9.55448 9.49891H6.82448V18.9929Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_171_3829">
                          <rect
                            width="10"
                            height="19"
                            fill="white"
                            transform="translate(0.6875)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="23"
                      height="17"
                      viewBox="0 0 23 17"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_171_3831)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21.6955 1.89598C20.9225 2.21798 20.0915 2.43298 19.2205 2.53098C20.1105 2.03098 20.7935 1.23898 21.1155 0.296977C20.2815 0.758977 19.3595 1.09498 18.3775 1.27698C17.5925 0.490977 16.4715 0.000976562 15.2325 0.000976562C12.8525 0.000976562 10.9215 1.80998 10.9215 4.03998C10.9215 4.35698 10.9595 4.66598 11.0335 4.96098C7.4515 4.79198 4.2755 3.18398 2.1495 0.740977C1.7785 1.33798 1.5665 2.03098 1.5665 2.77198C1.5665 4.17198 2.3275 5.40998 3.4835 6.13398C2.7775 6.11198 2.1135 5.93098 1.5315 5.62798C1.5315 5.64598 1.5315 5.66098 1.5315 5.67998C1.5315 7.63698 3.0165 9.26898 4.9885 9.63998C4.6275 9.73198 4.2455 9.77998 3.8535 9.77998C3.5755 9.77998 3.3055 9.75598 3.0425 9.70998C3.5905 11.313 5.1825 12.482 7.0685 12.515C5.5935 13.598 3.7355 14.243 1.7155 14.243C1.3675 14.243 1.0245 14.224 0.6875 14.187C2.5945 15.332 4.8605 16.002 7.2945 16.002C15.2225 16.002 19.5575 9.84598 19.5575 4.50898C19.5575 4.33298 19.5525 4.15998 19.5445 3.98598C20.3865 3.41598 21.1175 2.70498 21.6955 1.89598Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_171_3831">
                          <rect
                            width="22"
                            height="17"
                            fill="white"
                            transform="translate(0.6875)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_171_3833)">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M19.1997 19.0132H2.17573C1.35973 19.0132 0.69873 18.4342 0.69873 17.7202V2.28223C0.69873 1.56923 1.35973 0.990234 2.17573 0.990234H19.1997C20.0147 0.990234 20.6757 1.56923 20.6757 2.28223V17.7202C20.6757 18.4342 20.0147 19.0132 19.1997 19.0132ZM4.16073 16.0442H7.10273V7.90723H4.16073V16.0442ZM5.65173 3.98523C4.64473 3.98523 3.98773 4.59223 3.98773 5.39123C3.98773 6.17123 4.62573 6.79723 5.61273 6.79723H5.63173C6.65773 6.79723 7.29573 6.17123 7.29573 5.39123C7.27773 4.59223 6.65773 3.98523 5.65173 3.98523ZM17.7107 11.3792C17.7107 8.87923 16.2587 7.71623 14.3237 7.71623C12.7617 7.71623 12.0637 8.50523 11.6727 9.06023V7.90723H8.73073C8.76973 8.67123 8.73073 16.0442 8.73073 16.0442H11.6727V11.5002C11.6727 11.2582 11.6917 11.0142 11.7697 10.8412C11.9817 10.3552 12.4667 9.85223 13.2787 9.85223C14.3437 9.85223 14.7687 10.5982 14.7687 11.6922V16.0442H17.7107V11.3792ZM11.6527 9.08723C11.6587 9.07823 11.6667 9.06923 11.6727 9.06023V9.08723H11.6527Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_171_3833">
                          <rect
                            width="20"
                            height="20"
                            fill="white"
                            transform="translate(0.6875)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.border}>
        <p>© 2021 All Rights Reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
