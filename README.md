<!-- 

Portfolio

<App>
    <Header/>

    <HomePage>
        <Hero>
        <Button>
        <HomePageVibes>
    </HomePage>

    <AboutPage> <---- (withArrowsFunctions HOC)

        <Grid>
            <AboutInfo>
                <ArrowLeft />
                <Headline/>
                <ArrowRight />
            <AboutInfo />

            <Image />

            <ItemList>
                <Headline />
            <ItemList />
        </Grid>

        <ModalWindow >
            <CloseButton />
            <ModalItem >
                <Image />
            <ModalItem />
        </ModalWindow>

    </AboutPage>

    <PortfolioPage> <---- (withMobileChecking (withArrowsFunctions HOC))

        <ArrowLeft />  

        <Works>   <---- (withMobileChecking HOC)
            <WorkInfo/>
        </Works>  

        <ArrowRight /> 

        <Numbers />

    </PortfolioPage>
    
    <ContactPage>  <---- (withDataService HOC)
        <ContactsBoard/>
        <ContactsBoard/>
        <ContactsBoard/>
        <ContactsBoard/>
        <MapImageSvg />
    </ContactPage> 

-->