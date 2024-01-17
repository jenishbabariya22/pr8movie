import logo from './logo.svg';
import './App.css';
import Header from './pages/Header';
import Navbar from './pages/Navbar';
import Slider from './pages/Slider';
import { useState, useEffect } from 'react';

function App() {

  // movie data
  const [movies, setMovies] = useState(
    [
      {
        Title: 'Salaar',
        Year: '1977',
        imdbID: 'tt0076759',
        Type: 'movie',
        Poster:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVnW-31DF-m43e8k_OW2_hFwyl17HqnpGHA&usqp=CAU",
        category: "action"
      },
      {
        Title: 'Ram-Leela',
        Year: '1980',
        imdbID: 'tt0080684',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=75b5609a0c2d65067dd1339b2dd5e3b635421b9e-9040073-images-thumbs&n=13',
        category: "adventure"
      },
      {
        Title: 'Tere-Naam',
        Year: '1983',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=f0ba66ac8c6e139ef5c211a33ca2dc3a-4835198-images-thumbs&n=13',
        category: "romance"
      },
      {
        Title: 'Kgf Rocky',
        Year: '1993',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=87a387a8b3ede646da22a4c2370ee2e15f3fd84b-9150090-images-thumbs&n=13',
        category: "crime"
      },
      {
        Title: 'Pushpa Fire',
        Year: '1976',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=0e44dda4927ce89ecfd4246dee7a55fda146e35f-9858395-images-thumbs&n=13',
        category: "action"
      },
      {
        Title: 'Fighter',
        Year: '1984',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=2a0000018d094983f829afd01ff3d8d6135c-1664858-fast-images&n=13',
        category: "comedy"
      },
      {
        Title: 'Bahubali',
        Year: '1993',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=dd386873f0a7ac3bb3606b8186cb052b6becddb5-10639540-images-thumbs&n=13',
        category: "thriller"
      },
      {
        Title: 'Mohanjodharo',
        Year: '1963',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=90b69a5994c8fdd0bebd8d9bbb13ec5157141e05-5225035-images-thumbs&n=13',
        category: "family"
      },
      {
        Title: 'Mohabbatein',
        Year: '1943',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=b8d9bcdd946918d4f6cfbdf1765ba1f7e685ffc2-5251286-images-thumbs&n=13',
        category: "family"
      },
      {
        Title: 'Omg',
        Year: '1943',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=efe92aece6293502c3c0bb271175844b742872ab-10385057-images-thumbs&n=13',
        category: "comedy"
      },
      {
        Title: 'Hero',
        Year: '2004',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=76b99b98d50f84bf38644230239928bf8f2af4d9-9072236-images-thumbs&n=13',
        category: "crime"
      },
      {
        Title: 'Shultan',
        Year: '2009',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://yandex-images.clstorage.net/la9oz6435/b31fbeMCU/JT4WbFhGtYcSwpXahWqWgMNINxkr7yP81LbGF3CL5NUf4aaxnSOE3X4Httj62P4Q_wA33fPmRCwDNsETtLi1vWgrTjlpS7naQ5-Vr6BaiqTTNRtsC-4_jZyamnoAs-jUhw07bQ3acAS7-xpki5mXRaokboHH1-2wW0eRH4ENRQQlctowDK50h_7ibLr9-pIgN_0bjauWo0k4vjNWmZqFgOdhh8Xt8ixwU_8SEP-B-20u4RIpZ1etyX97jV_5LamYjd5KJNiWxBOqaghWXTJywHelE63v-otdoEqL_r3SofxbXQ_FsZLQbBsrHjS__bftVlG2ufdTodGXB_nHlcXJcMkOOix87uQ3spaYiiF6upzz4ctBY1oTjRRSj679YjEoHxmnOc06XJhbr9Z8L8kXMZJJsqX3K12dS-9lK42tWXSVDqrcPDIcF6pyRPb1spY8A_1HuTNazxEYljfKbQbF3L8lKwFNnsj8o2uK9HOFmz2ykb7pE8e5pbPnadPpocE4iSIimACuSLeSnuhyWU6mqEdxzwn7LvtR-NrjyiWmZaRfERulkaJg-McnjvQHtacFclEaNVunLUWfd2kfuVHliLU6enwEVuhfKo4UNnXmehxj5U-NE2Z_gWgu277tGmUwv8X7-eGCZHQbax7M-0lvgRrRCkUztz2Vw8uxq-VFLaCRPnJYPKKcB5pOsN5xcno0HwmLAbNq-4l4ip9avQKNkPe980W9ehRg2zu6bCOV_xV--RpVo9sJidfHeYOx8enwMUqObBwuJINCwoR6_TYqCHfB2-1fYtMV7ILjxnX6lbQnebclMerIVMejWsT7fft5ipVGnUMn0QGPS8E7kV257EX2gqD4ntR3egK41mlWRqz3vZst5y6_ERC6W0oxSv1UwzmjqR2ybCzHAwaYo0XziVYBbjE3U6l5T3MVMzVxqQCBPjoI_DYYN4KOFDY51m64441fCRMy0xmAcvN6aSY0',
        category: "thriller"
      },
      {
        Title: 'Chhenai-Express',
        Year: '1943',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=8184f6f99db3a5579611df415f42d11a-4256359-images-thumbs&n=13',
        category: "drama"
      },
      {
        Title: 'Avattar',
        Year: '1943',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://yandex-images.clstorage.net/la9oz6435/b31fbeMCU/JT4WbFhGtYcSwpXahWqWgMNINxkr7yP81LbGF2HP7ME6uPfkwEeBgUdq35WPiM9drkwOmePnGC1Kcuhe9IntoDg7S2VpW73-Z5O5v9VKmpTLPUIVb55L7aDfz1tMg-Fkh3U7YXmaBGiDwwa466W_Qd99WrHPH-xNMx-lJ11VUaw1rh5s_ILAZxZmgP51Uh5wAz2jtRcCj0mEduPCZe61BOvJk4FRxnCAh8tyzPPJl8UaAfIRT1-VaQ8D5V99uc0EmT4KuMQyVDOeAmxevbL-MFs1g_F7KpvRcM5L5i3KybjXQZPdMTpsyFPHVoyPhRe9qqVigUtTjYFzd30zldklQElOAhy8EnArYpKwIvV6orQf7W9927JLZWjKG6adWh38k-lvoZm2mIjXDx4cuyXLebKhfoEzr8Fdm-uRK_1JIRxJ3vJcYOpQM4ZOzPY9VgJEA2GXLdtu12mscn82-a7pXK9lVyE9IvxwE1OWQPepx1lqrTJl30v5pZPnaU_x0W0AZVa2YPy-8Atq4khawWaWAI_pJ-WvWpeJ4KZ_flkOkbybVfP9AYr4FF9XljTHlf-ZqgnuLb_fGYkD56UfAfXdPH0OUmQEHhizeh4Mdmm6IiQbaaMN595HGRSeC7blDgVcT7WvjSGOdMgTx67IO1178SoZnkWvz8nVvz8RQxU99Rh5BnZc8GpAA7q65HL9ugpY960vretaTwmw2u_m_ealFDe9E9HZ_mAIQ2MOEOfN75UCCY7Vw_vVwbP3OReh-aW4DfpCfHzSxNs2jkD-ueo2MD_9w0HjctOduKZzLgX-gcTz-XNdSSJUFNuDpsgPyYNhblVGNT8jXZk_T4E3Dam5zLH2jpjMIjDj9rLsatmGkrBDvQP5rx7XYYAe_2q1lmEgs-3_cRGGLBR73_qQN8Fzvfp96kFLWyVZB5uJkyG5VQh5TiacZO5wG3oeDDpZroakc3knDbNy3_FIts8y2V4U',
        category: "adventure"
      },
      {
        Title: 'Takken-3',
        Year: '1973',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://yandex-images.clstorage.net/la9oz6435/b31fbeMCU/JT4WbFhGtYcSwpXahWqWgMNINxkr7yP81LbGFiHT6P0v-Pfs1TeQwAY_t42ywPtc4w1CmL66cBgGbuhK6KSg9WwvQilpW7Hea4e5g9VKmpTLPUIVb55L7aDfz2YNh8GhDrTzFXmiSETj23Z4czkXMbp9Rpma2x1xb9NcG9Xd-ZTB3r44SMb074Ze4DrR2vaMQxW_weuqs02ALkfyFSKZOCfZp3UVHuCky4cCkHcxY0WiEW4dX6e10e-TJT_pwbns4TIikORW4Du-7nRuWb4aLIv1X4GzopMJ7AZTauGaMRxv_dvJKZbg-Kt7HtijPUcF3l3uZe8DJUHrnz3XlbUhgAlSytQ0Juifxs5QdqUuxlDDPQMF93p_hUyeg975nmFc320PjW0-HIQD9-qYJ_UPler9MqH3BzlBk2NxC30pzZhhws6INLYY3xo2cG5B8rqECxGj9ev2h9VMQh_SPSYFzLuZ-y1RsiQEp2OOYOOph8mmcT6BLwt1pX-HSfN1JTX8bVqClBg-XOOGYtBWrV4-KPchN7FnfjcdOHZfMnHyBYQbOYPNZYKA2JvLigSvrYe9lk0GQe-vqe0fE6nf5SX5rJ1-MqgAZrjnfsI47r2iegRf_YOV8_6z9XDyj6KFynFMpzkXLbFi3Ki7zwbY4z2_QWqFgilvv9mFDwN5g1n9TfCJthqMBG6c34q2YF59BpIAy_2r6R86P1V8doeyIY6VHL_Rt2XJamD0Q78SGLOZH5m2FRZNR6_JFWM3ZZdVNWWkPXJKLHCSqP8GDuSG8TI2jI-tl4HXatO5dF4bJinyCdRHyZO1DS4AeNNjJgQrebdBXhF6uSvzAfWf7-3P2Y3dhJEiVljMnmQbtv4QvjEOmhjvwTMBqyoTATgyH9oRSoWQ96FzUU06jFSLx14EiyXrGWYZimW_262B65eVD-FZ1SC9MrqcBCbMHx4yUEa9onpIb-knFZvuN_UkXhdK2eK0',
        category: "history"
      },
      {
        Title: 'Star-Take',
        Year: '1948',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=3dbb71af5d770e426ca3854539679757dff7e3da-5987336-images-thumbs&n=13',
        category: "war"
      },
      {
        Title: 'Fant4stick',
        Year: '1913',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=5dc7495f212ea34280f5f57d682db7cec014504c-9837641-images-thumbs&n=13',
        category: "comedy"
      },
      {
        Title: 'Avattar-2',
        Year: '1923',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://yandex-images.clstorage.net/la9oz6435/b31fbeMCU/JT4WbFhGtYcSwpXahWqWgMNINxkr7yP81LbGF1yT7NU7_afw1ELFhBo-_5GPlbYE8lVT1f6_HVQac7US5KXw4Wg_ci1pa73ye7eBs9VKmpTLPUIVb55L7aDfz2YNh8GhDrTzFXmiSETj23Z4czkXMbp9Rpma2x1xb9NcG9Xd-ZTB3r44SMb074Ze4DrR2vaMQxW_weuqs02ALkfyFSKZOCfZp3UVHuCky4cCkHcxY0WiEW4dX6e10e-TJT_pwbns4TIikORW4Du-7nRuWb4aLIv1X4GzopMJ7AZTauGaMRxv_dvJKZbg-Kt7HtijPUcF3l3uZe8DJUHrnz3XlbUhgAlSytQ0Juifxs5QdqUuxlDDPQMF93p_hUyeg975nmFc320PjW0-HIQD9-qYJ_UPler9MqH3BzlBk2NxC30pzZhhws6INLYY3xo2cG5B8rqECxGj9ev2h9VMQh_SPSYFzLuZ-y1RsiQEp2OOYOOph8mmcT6BLwt1pX-HSfN1JTX8bVqClBg-XOOGYtBWrV4-KPchN7FnfjcdOHZfMnHyBYQbOYPNZYKA2JvLigSvrYe9lk0GQe-vqe0fE6nf5SX5rJ1-MqgAZrjnfsI47r2iegRf_YOV8_6z9XDyj6KFynFMpzkXLbFi3Ki7zwbY4z2_QWqFgilvv9mFDwN5g1n9TfCJthqMBG6c34q2YF59BpIAy_2r6R86P1V8doeyIY6VHL_Rt2XJamD0Q78SGLOZH5m2FRZNR6_JFWM3ZZdVNWWkPXJKLHCSqP8GDuSG8TI2jI-tl4HXatO5dF4bJinyCdRHyZO1DS4AeNNjJgQrebdBXhF6uSvzAfWf7-3P2Y3dhJEiVljMnmQbtv4QvjEOmhjvwTMBqyoTATgyH9oRSoWQ96FzUU06jFSLx14EiyXrGWYZimW_262B65eVD-FZ1SC9MrqcBCbMHx4yUEa9onpIb-knFZvuN_UkXhdK2eK0',
        category: "thriller"
      },
      {
        Title: 'Drive',
        Year: '1944',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=ee42b874cc0b8b517a28b94f6b192107e4f33e54-4567142-images-thumbs&n=13',
        category: "romance"
      },
      {
        Title: 'Due-Dates',
        Year: '1990',
        imdbID: 'tt0086190',
        Type: 'movie',
        Poster:
          'https://avatars.mds.yandex.net/i?id=55c973312db3587ec699ebf1bb31f051-5232689-images-thumbs&n=13',
        category: "comedy"
      },
    ]
  );

  useEffect(() => {
    let all = [...movies]
    let Data = localStorage.setItem("user", JSON.stringify(all));
    setMovies(Data);
  }, [])
  useEffect(() => {
    let old = JSON.parse(localStorage.getItem('user')) ? JSON.parse(localStorage.getItem('user')) : [];
    setMovies(old);
  }, [])
  return (
    <div style={{ flexDirection: "row", height: "100%", overflow: "hidden" }} className='d-flex'>
      <div style={{ width: "20%" }}>
        <Header />
      </div>
      <div style={{ width: "80%" }}>
        <Navbar movies={movies} setMovies={setMovies} />
        <Slider record={movies} />
      </div>
    </div>


  );
}

export default App;
