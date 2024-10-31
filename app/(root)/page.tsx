export default function Home() {
    return (
        <>
            <section className="pink_container">
                {/*  from global css*/}
                <h1 className="heading">Pitch Your Startup,<br/>  Connect With Entrepreneurs</h1>

                {/* ! is to override some other styles prev provided to this element*/}
                <p className="sub-heading !max-w-3xl">
                    Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions.
                </p>

            </section>

        </>
    );
}
