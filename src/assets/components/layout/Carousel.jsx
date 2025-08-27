
import { useState } from 'react';
import Styles from './Carousel.module.css';
import GenCitas from '../../apps/gen-citas/GenCitas';
import CalImc from '../../apps/cal-imc/CalImc';
import { flechaDer, flechaIzq } from '../../icons/Icons';

const Carousel = () => {
    // Array de aplicaciones disponibles
    const apps = [
        {
            id: 1,
            title: "Generador de Citas",
            component: GenCitas
        },
        {
            id: 2,
            title: "Calculadora de IMC",
            component: CalImc
        },
        {
            id: 3,
            title: "Próxima App",
            component: null,
            placeholder: true
        },
        {
            id: 4,
            title: "Otra App",
            component: null,
            placeholder: true
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const appsPerView = 2; // Mostrar 2 aplicaciones a la vez

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex + appsPerView;
            return newIndex >= apps.length ? 0 : newIndex;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => {
            const newIndex = prevIndex - appsPerView;
            return newIndex < 0 ? Math.max(0, apps.length - appsPerView) : newIndex;
        });
    };

    const visibleApps = apps.slice(currentIndex, currentIndex + appsPerView);

    return (
        <div className={Styles.Carousel}>

            <main className={Styles.mainContent}>
                <div className={Styles.carouselContainer}>
                    <button 
                        className={`${Styles.carouselButton} ${Styles.prevButton}`}
                        onClick={prevSlide}
                        disabled={currentIndex === 0}
                    >
                        {flechaIzq()}
                    </button>

                    <div className={Styles.appsContainer}>
                        {visibleApps.map((app) => (
                            <div key={app.id} className={Styles.appCard}>
                                <h2 className={Styles.appTitle}>{app.title}</h2>
                                {app.placeholder ? (
                                    <div className={Styles.placeholder}>
                                        <p className={Styles.comingSoon}>Próximamente...</p>
                                    </div>
                                ) : (
                                    <app.component />
                                )}
                            </div>
                        ))}
                    </div>

                    <button 
                        className={`${Styles.carouselButton} ${Styles.nextButton}`}
                        onClick={nextSlide}
                        disabled={currentIndex + appsPerView >= apps.length}
                    >
                        {flechaDer()}
                    </button>
                </div>

                <div className={Styles.indicators}>
                    {Array.from({ length: Math.ceil(apps.length / appsPerView) }).map((_, index) => (
                        <button
                            key={index}
                            className={`${Styles.indicator} ${
                                Math.floor(currentIndex / appsPerView) === index ? Styles.active : ''
                            }`}
                            onClick={() => setCurrentIndex(index * appsPerView)}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Carousel;