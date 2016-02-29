Spec:

PlusOnes
	En liste af forslag man kan stemme på

	En PlusOne indeholder:
		creator: UserId
		owners: Array<UserID>,
		users: Array<UserId>,
		created: unix,
		modified: unix,
		suggestions: []<Suggestion>,
		votesPrSuggestion: int,
		totalVotes: int

	En Suggestion indeholder:
		creator: userID || null,
		created: unix,
		modified: unix,
		votes: int
	
	sikkerhed for PlusOne:
		hidden: alle med link kan, men man skal authentikere sig og ens email skal passe til de inviterede, 			stemme

	Alle PlusOnes har en eller flere ejere
		kan konfigurere:
			hvem der må oprette forslag
			hvem der er inviteret
			hvor mange gange folk må stemme på 1 forslag (en gang, så read only…)
		kan invitere via en email adresse (vi sender en email med link)
		kan dele linket via diverse

	Alle brugere der kan se afstemning
		kan give point til et forslag
		kan se en graf over forslag + point
	
Notifications:
	Push if not in focus
	In-app if in focus

Share via:
	Twitter
	Facebooks

Routing:

	/	public	

	/plusones		protected list PlusOnes
	/plusones/:id		protected edit PlusOne
	/create			protected new PlusOne
