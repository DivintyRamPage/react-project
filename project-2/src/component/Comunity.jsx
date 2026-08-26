import './Comunity.css'

const communityData = [{
    image: '/Icon.png',
    title: 'Membership Organisations',
    text: 'Our membership management software provides full automation of membership renewals and payments'
}, {
    image: '/Icon (1).png',
    title: 'National Associations',
    text: 'Our membership management software provides full automation of membership renewals and payments'
}, {
    image: '/Icon (2).png',
    title: 'Membership Organisations',
    text: 'Our membership management software provides full automation of membership renewals and payments'
}]

export function Comunity() {
    return (
        <>
            <section className="community">
                <div className="container">
                    <div className="community__header">
                        <h2 className="community__title">Manage your entire community in a single system</h2>
                        <p className="community__subtitle">Who is Nextcent suitable for?</p>
                    </div>

                    <div className="community__cards">
                        {communityData.map((item, i) => {
                            return (
                                <>
                                    <div className="community__card" key={i}>
                                        <div className="community__card-icon">
                                            <img src={item.image} alt="" />
                                        </div>
                                        <h3 className="community__card-title">{item.title}</h3>
                                        <p className="community__card-text">
                                            {item.text}
                                        </p>
                                    </div>
                                </>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Comunity;