const s3 = "https://dqeczc7c9n9n1.cloudfront.net/audio/playlists/";

const beenTurntUrl = `${s3}Been+Turnt/`;
const lateNightsUrl = `${s3}Late+Nights/`;
const theCookoutUrl = `${s3}The+Cookout/`;

const beenTurnt = [
	`${beenTurntUrl}22nd+Jim+-+Blitz+Freestyle.mp3`,
	`${beenTurntUrl}22nd+Jim+-+Members+Only.mp3`,
	`${beenTurntUrl}22nd+Jim%2C+EST+Gee+-+Off+White+Mikes+(feat.+EST+Gee).mp3`,
	`${beenTurntUrl}22nd+Jim%2C+Kenny+Beats+-+Face+Card.mp3`,
	`${beenTurntUrl}42+Dugg+-+Been+Turnt.mp3`,
	`${beenTurntUrl}42+Dugg+-+Free+Woo.mp3`,
	`${beenTurntUrl}42+Dugg+-+Freshman+Of+The+Year.mp3`,
	`${beenTurntUrl}42+Dugg%2C+Fivio+Foreign%2C+Rowdy+Rebel+-+Still+Catching+Cases+(feat.+Fivio+Foreign+%26+Rowdy+Rebel).mp3`,
	`${beenTurntUrl}42+Dugg%2C+Lil+Baby%2C+Yo+Gotti+-+Not+A+Rapper+(feat.+Lil+Baby+%26+Yo+Gotti).mp3`,
	`${beenTurntUrl}42+Dugg%2C+Lil+Durk+-+Free+RIC+(feat.+Lil+Durk).mp3`,
	`${beenTurntUrl}42+Dugg%2C+Moneybagg+Yo+-+On+My+Son+(feat.+Moneybagg+Yo).mp3`,
	`${beenTurntUrl}AzChike+-+Fuck+Shit.mp3`,
	`${beenTurntUrl}BabyTron%2C+DaBoii+-+Chess+Players+(feat.+DaBoii).mp3`,
	`${beenTurntUrl}Bankroll+Freddie%2C+EST+Gee+-+Real+Street+Nigga+(feat.+EST+Gee).mp3`,
	`${beenTurntUrl}BIA+-+SKATE.mp3`,
	`${beenTurntUrl}Big+Jade+-+No+Hook.mp3`,
	`${beenTurntUrl}Bizzy+Banks+-+Top+5.mp3`,
	`${beenTurntUrl}BlocBoy+JB%2C+EST+Gee+-+Smoke+(with+EST+Gee).mp3`,
	`${beenTurntUrl}BlueBucksClan+-+Walkin'+In.mp3`,
	`${beenTurntUrl}Blxst%2C+Bino+Rideaux+-+Program.mp3`,
	`${beenTurntUrl}Blxst%2C+Bino+Rideaux+-+She+Perfect.mp3`,
	`${beenTurntUrl}DaBaby%2C+YoungBoy+Never+Broke+Again+-+Head+Off.mp3`,
	`${beenTurntUrl}DaBoii+-+Head+Huncho.mp3`,
	`${beenTurntUrl}DaBoii+-+Humble.mp3`,
	`${beenTurntUrl}DaBoii+-+KickDoe.mp3`,
	`${beenTurntUrl}Dreamville%2C+EARTHGANG%2C+2+Chainz+-+Ghetto+Gods+Freestyle+(with+EARTHGANG+feat.+2+Chainz).mp3`,
	`${beenTurntUrl}EBK+Young+Joc+-+Shooters.mp3`,
	`${beenTurntUrl}EST+Gee+-+Ball+Forever.mp3`,
	`${beenTurntUrl}EST+Gee+-+Bigger+Than+Life+Or+Death.mp3`,
	`${beenTurntUrl}EST+Gee+-+Capitol+1.mp3`,
	`${beenTurntUrl}EST+Gee+-+Jumpout+Gang.mp3`,
	`${beenTurntUrl}EST+Gee+-+Lamborghini+Geeski.mp3`,
	`${beenTurntUrl}EST+Gee+-+Lick+Back.mp3`,
	`${beenTurntUrl}EST+Gee+-+Make+It+Even.mp3`,
	`${beenTurntUrl}EST+Gee+-+OD.mp3`,
	`${beenTurntUrl}EST+Gee+-+Riata+Dada.mp3`,
	`${beenTurntUrl}EST+Gee+-+Who+Hotter+Than+Gee.mp3`,
	`${beenTurntUrl}EST+Gee+-+Young+Shiners.mp3`,
	`${beenTurntUrl}EST+Gee%2C+42+Dugg+-+Members+Only+(feat.+42+Dugg).mp3`,
	`${beenTurntUrl}fivio+foreign+etc+-+squeeze.mp3`,
	`${beenTurntUrl}Fivio+Foreign%2C+Quavo+-+Through+the+Fire+(feat.+Quavo).mp3`,
	`${beenTurntUrl}Fivio+Foreign%2C+Vory%2C+Polo+G+-+Changed+On+Me+(feat.+Vory+%26+Polo+G).mp3`,
	`${beenTurntUrl}Future+-+712PM.mp3`,
	`${beenTurntUrl}Future+-+HOLY+GHOST.mp3`,
	`${beenTurntUrl}Future+-+MASSAGING+ME.mp3`,
	`${beenTurntUrl}Future+-+Seven+Rings.mp3`,
	`${beenTurntUrl}Future+-+Worst+Day.mp3`,
	`${beenTurntUrl}Future%2C+Kanye+West+-+KEEP+IT+BURNIN+(feat.+Kanye+West).mp3`,
	`${beenTurntUrl}Future%2C+Young+Thug+-+Harlem+Shake+(feat.+Young+Thug).mp3`,
	`${beenTurntUrl}Gunna%2C+Duke+-+Make+No+Sense+(feat.+Duke).mp3`,
	`${beenTurntUrl}Gunna%2C+Future+-+too+easy.mp3`,
	`${beenTurntUrl}Gunna%2C+Future%2C+Young+Thug+-+pushin+P+(feat.+Young+Thug).mp3`,
	`${beenTurntUrl}ICYTWAT+-+Cheat+Codes.mp3`,
	`${beenTurntUrl}Kalan.FrFr+-+Scoring.mp3`,
	`${beenTurntUrl}Lil+Baby%2C+Gunna+-+Ready+(feat.+Gunna).mp3`,
	`${beenTurntUrl}Lil+Yachty%2C+Kodak+Black+-+Hit+Bout+It.mp3`,
	`${beenTurntUrl}Lil+Zay+Osama+-+Danny+Block.mp3`,
	`${beenTurntUrl}Maxo+Kream%2C+Tyler%2C+The+Creator+-+BIG+PERSONA+(feat.+Tyler%2C+The+Creator).mp3`,
	`${beenTurntUrl}Meek+Mill%2C+42+Dugg+-+GTA+(feat.+42+Dugg).mp3`,
	`${beenTurntUrl}Mpthehooper+-+VVS+Breaker.mp3`,
	`${beenTurntUrl}Mpthehooper%2C+Sterloo+-+Coldgame+Freestyle.mp3`,
	`${beenTurntUrl}Mpthehooper%2C+Sterloo+-+Stick+Up.mp3`,
	`${beenTurntUrl}Nardo+Wick+-+Shhh.mp3`,
	`${beenTurntUrl}Nardo+Wick%2C+Future%2C+Lil+Baby+-+Me+or+Sum+(feat.+Future+%26+Lil+Baby).mp3`,
	`${beenTurntUrl}NAV+-+Friends+%26+Family.mp3`,
	`${beenTurntUrl}Never+Broke+Again%2C+YoungBoy+Never+Broke+Again%2C+P+Yungin%2C+Rojay+MLP%2C+Rjae+-+Gang+Baby+(Never+Broke+Again+feat.+YoungBoy+Never+Broke+Again%2C+P+Yungin%2C+Rojay+MLP+%26+Rjae).mp3`,
	`${beenTurntUrl}Pop+Smoke%2C+Bizzy+Banks+-+30+(feat.+Bizzy+Banks).mp3`,
	`${beenTurntUrl}Pop+Smoke%2C+Rah+Swish+-+Brush+Em+(feat.+Rah+Swish).mp3`,
	`${beenTurntUrl}Pusha+T+-+Brambleton.mp3`,
	`${beenTurntUrl}Pusha+T+-+Let+The+Smokers+Shine+The+Coupes.mp3`,
	`${beenTurntUrl}Remble%2C+Lil+Yachty+-+Rocc+Climbing+(feat.+Lil+Yachty).mp3`,
	`${beenTurntUrl}Rich+Brian%2C+EARTHGANG+-+Act+Up.mp3`,
	`${beenTurntUrl}Rick+Ross+-+The+Pulitzer.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Charlie.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Deep+End+(Freestyle).mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Glock+21.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Gone.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Jumpman.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Jungle.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Keep+It+Lit.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+King+Kony.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Patron.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Professor+Kony.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Smoke.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Tony+Story.mp3`,
	`${beenTurntUrl}ShooterGang+Kony+-+Uncle+Rukus.mp3`,
	`${beenTurntUrl}ShooterGang+Kony%2C+DaBoii%2C+Nef+The+Pharaoh%2C+Mike+Sherm+-+Charlie+2+(feat.+DaBoii%2C+Nef+The+Pharaoh+%26+Mike+Sherm).mp3`,
	`${beenTurntUrl}ShooterGang+Kony%2C+Kalan.FrFr+-+The+Game+(feat.+Kalan.FrFr.).mp3`,
	`${beenTurntUrl}ShooterGang+Kony%2C+Yhung+T.O.+-+I'm+Good+Luv+Enjoy+(feat.+Yhung+T.O.).mp3`,
	`${beenTurntUrl}Sterloo+-+Intro.mp3`,
	`${beenTurntUrl}Sterloo%2C+Mpthehooper+-+Talk+My+Shit.mp3`,
	`${beenTurntUrl}Tee+Grizzley%2C+G+Herbo+-+Never+Bend+Never+Fold.mp3`,
	`${beenTurntUrl}Tee+Grizzley%2C+Quavo%2C+Young+Dolph+-+In+My+Feelings+(feat.+Quavo+%26+Young+Dolph).mp3`,
	`${beenTurntUrl}Yo+Gotti%2C+42+Dugg%2C+EST+Gee+-+Cold+Gangsta.mp3`,
	`${beenTurntUrl}Young+Dolph%2C+G+Herbo+-+1+Scale+(feat.+G+Herbo).mp3`,
	`${beenTurntUrl}Young+Nudy+-+DR.+EV4L.mp3`,
	`${beenTurntUrl}Young+Nudy+-+Old+School.mp3`,
	`${beenTurntUrl}Young+Nudy%2C+G+Herbo+-+2Face+(feat.+G+Herbo).mp3`,
	`${beenTurntUrl}Young+Nudy%2C+Pi%E2%80%99erre+Bourne+-+Hot+Wings.mp3`,
	`${beenTurntUrl}Young+Stoner+Life%2C+Lil+Duke%2C+NAV+-+Pots+N+Pans+(feat.+Lil+Duke+%26+NAV).mp3`,
	`${beenTurntUrl}Young+Stoner+Life%2C+Young+Thug%2C+Rowdy+Rebel+-+Came+and+Saw+(feat.+Rowdy+Rebel).mp3`,
	`${beenTurntUrl}Young+Thug%2C+Drake%2C+Travis+Scott+-+Bubbly+(with+Drake+%26+Travis+Scott).mp3`,
	`${beenTurntUrl}YoungBoy+Never+Broke+Again+-+I+Came+Thru.mp3`
];

const lateNights = [
	`${lateNightsUrl}%C2%BFT%C3%A9o+-+Buena.mp3`,
	`${lateNightsUrl}%C2%BFT%C3%A9o+-+Pantera.mp3`,
	`${lateNightsUrl}Abstract+Mindstate+-+A+Wise+Tale.mp3`,
	`${lateNightsUrl}Ajna+-+Take+Me+Back.mp3`,
	`${lateNightsUrl}Alex+Vaughn+-+Gotta+Have+It.mp3`,
	`${lateNightsUrl}Ama+Lou+-+NORTHSIDE.mp3`,
	`${lateNightsUrl}Amel+Bent+-+Ma+philosophie.mp3`,
	`${lateNightsUrl}Anonymuz+-+We'll+Be+in+Love.mp3`,
	`${lateNightsUrl}Arin+Ray+-+Reckless.mp3`,
	`${lateNightsUrl}Austin+Millz%2C+Pell+-+On+Read.mp3`,
	`${lateNightsUrl}Bea+Miller%2C+Amin%C3%A9+-+FEEL+SOMETHING+DIFFERENT.mp3`,
	`${lateNightsUrl}Bill+Withers+-+Lovely+Day.mp3`,
	`${lateNightsUrl}binki+-+Marco.mp3`,
	`${lateNightsUrl}Black+Coffee%2C+Sabrina+Claudio+-+SBCNCSLY.mp3`,
	`${lateNightsUrl}Black+Milk+-+Will+Remain.mp3`,
	`${lateNightsUrl}bLAck+pARty+-+Bloom.mp3`,
	`${lateNightsUrl}bLAck+pARty+-+Dancing.mp3`,
	`${lateNightsUrl}bLAck+pARty%2C+Gwen+Bunn+-+Soakin+(feat.+Gwen+Bunn).mp3`,
	`${lateNightsUrl}Blxst%2C+Bino+Rideaux+-+She+Perfect.mp3`,
	`${lateNightsUrl}Blxst%2C+Rick+Ross+-+Couldn't+Wait+for+It.mp3`,
	`${lateNightsUrl}Bobby+Caldwell+-+What+You+Won't+Do+for+Love.mp3`,
	`${lateNightsUrl}Bobby+Womack+-+Across+110th+Street.mp3`,
	`${lateNightsUrl}Boldy+James%2C+The+Alchemist+-+Carruth.mp3`,
	`${lateNightsUrl}Bratia+Stereo%2C+Tony+Tonite+-+Ayayay.mp3`,
	`${lateNightsUrl}Brent+Faiyaz+-+Clouded.mp3`,
	`${lateNightsUrl}BRYVN%2C+Igwe+Aka+-+Not+The+Hills.mp3`,
	`${lateNightsUrl}Byron+the+Aquarius+-+Feel+My+Thoughts+-+Bruh.mp3`,
	`${lateNightsUrl}Carter+Ace+-+I+Think+I'm+Normal.mp3`,
	`${lateNightsUrl}Carter+Ace%2C+Swoon%2C+Andrea+Chahayed+-+What+They+Think.mp3`,
	`${lateNightsUrl}Cautious+Clay%2C+Remi+Wolf%2C+sophie+meiers%2C+Still+Woozy%2C+Claud%2C+Melanie+Faye%2C+HXNS+-+Cheesin%E2%80%99+(with+Cautious+Clay%2C+Remi+Wolf%2C+Still+Woozy%2C+Sophie+Meiers%2C+Claud%2C+Melanie+Faye%2C+%26+HXNS).mp3`,
	`${lateNightsUrl}Che+Ecru+-+eXplain+myself.mp3`,
	`${lateNightsUrl}Choker+-+Juno.mp3`,
	`${lateNightsUrl}Chris+Howland%2C+Montell+Fish%2C+Sarah+Juers+-+Holding+Me+Down.mp3`,
	`${lateNightsUrl}Col3trane+-+Californication+(Feels+Like+I'm+Falling+In+Love).mp3`,
	`${lateNightsUrl}Cruel+Santino%2C+BRIDGE%2C+Nonso+Amadi+-+Freaky.mp3`,
	`${lateNightsUrl}Crush%2C+Joyce+Wrice%2C+Devin+Morrison+-+Lookin+4+(Feat.+Joyce+Wrice%2C+Devin+Morrison).mp3`,
	`${lateNightsUrl}Dan+D'Lion+-+Co-Pilot.mp3`,
	`${lateNightsUrl}Daniel+Caesar%2C+BADBADNOTGOOD+-+Please+Do+Not+Lean+(feat.+BADBADNOTGOOD).mp3`,
	`${lateNightsUrl}DaniLeigh+-+Situations.mp3`,
	`${lateNightsUrl}Desired+-+First+Kiss.mp3`,
	`${lateNightsUrl}Dirty+Sanchez+47%2C+Capital+Steez%2C+Rokamouth+-+Maxwell.mp3`,
	`${lateNightsUrl}Disclosure%2C+Kehlani%2C+Syd+-+Birthday.mp3`,
	`${lateNightsUrl}Disclosure%2C+Mick+Jenkins+-+Who+Knew.mp3`,
	`${lateNightsUrl}DJ+HMD%2C+Emmitt+Dupree+-+Can't+Pretend.mp3`,
	`${lateNightsUrl}DJU+DJU+-+I+need+my+music!.mp3`,
	`${lateNightsUrl}DKOHH+-+Summer+in+Chicago.mp3`,
	`${lateNightsUrl}Drake+-+Jungle.mp3`,
	`${lateNightsUrl}Drake%2C+Future+-+Diamonds+Dancing.mp3`,
	`${lateNightsUrl}Dreamer+Boy+-+Lavender.mp3`,
	`${lateNightsUrl}Dreamer+Isioma+-+I+Feel+Fantastic.mp3`,
	`${lateNightsUrl}Duckwrth+-+Crush.mp3`,
	`${lateNightsUrl}Duckwrth+-+Kiss+U+Right+Now.mp3`,
	`${lateNightsUrl}Duckwrth+-+No+Chill.mp3`,
	`${lateNightsUrl}Duckwrth+-+Slow+Motion.mp3`,
	`${lateNightsUrl}Duckwrth+-+We+Outside.mp3`,
	`${lateNightsUrl}Duckwrth%2C+KIAN+-+Quick.mp3`,
	`${lateNightsUrl}Earth%2C+Wind+%26+Fire%2C+Lucky+Daye+-+You+Want+My+Love.mp3`,
	`${lateNightsUrl}Elujay+-+Pandemia.mp3`,
	`${lateNightsUrl}Elujay+-+Tenfold.mp3`,
	`${lateNightsUrl}Elujay%2C+HXNS+-+1080p.mp3`,
	`${lateNightsUrl}Elujay%2C+Rexx+Life+Raj+-+Mrs.+Jackson.mp3`,
	`${lateNightsUrl}emawk+-+18.mp3`,
	`${lateNightsUrl}emawk+-+bayridge.mp3`,
	`${lateNightsUrl}emawk+-+Convo+6.mp3`,
	`${lateNightsUrl}emawk+-+Later.mp3`,
	`${lateNightsUrl}emawk+-+POP.JPG.mp3`,
	`${lateNightsUrl}emawk+-+whelmed.mp3`,
	`${lateNightsUrl}emawk%2C+Zach+Ezzy+-+FAIY.mp3`,
	`${lateNightsUrl}Emmitt+Dupree+-+Hours+Make+Ours.mp3`,
	`${lateNightsUrl}Emotional+Oranges+-+West+Coast+Love.mp3`,
	`${lateNightsUrl}Emotional+Oranges%2C+Vince+Staples+-+Back+%26+Forth+(feat.+Vince+Staples).mp3`,
	`${lateNightsUrl}Erick+the+Architect%2C+Loyle+Carner%2C+FARR+-+Let+It+Go.mp3`,
	`${lateNightsUrl}Femme+It+Forward%2C+Sin%C3%A9ad+Harnett+-+Crown.mp3`,
	`${lateNightsUrl}Flozigg+-+MUTUAL.mp3`,
	`${lateNightsUrl}Flying+Lotus%2C+Thundercat+-+Black+Gold.mp3`,
	`${lateNightsUrl}Freddie+Gibbs%2C+Jadakiss+-+Black+Illuminati+(feat.+Jadakiss).mp3`,
	`${lateNightsUrl}Freddie+Gibbs%2C+The+Alchemist%2C+Rick+Ross+-+Scottie+Beam.mp3`,
	`${lateNightsUrl}Free+Party+-+Helly's+%26+Foams.mp3`,
	`${lateNightsUrl}FRITOGANG+-+Best+Friend.mp3`,
	`${lateNightsUrl}FRITOGANG+-+Right+Now.mp3`,
	`${lateNightsUrl}Future+-+BACK+TO+THE+BASICS.mp3`,
	`${lateNightsUrl}Future+-+Codeine+Crazy.mp3`,
	`${lateNightsUrl}GoldLink%2C+Flo+Milli+-+Raindrops+(feat.+Flo+Milli).mp3`,
	`${lateNightsUrl}Greentea+Peng+-+Hu+Man.mp3`,
	`${lateNightsUrl}Hanz%2C+emawk+-+Ambivalence.mp3`,
	`${lateNightsUrl}Hare+Squead+-+Herside+Story.mp3`,
	`${lateNightsUrl}Hope+Tala%2C+Amin%C3%A9+-+Cherries.mp3`,
	`${lateNightsUrl}Hope+Tala%2C+Amin%C3%A9+-+Cherries.mp3`,
	`${lateNightsUrl}IshDARR+-+They+Lost+Me.mp3`,
	`${lateNightsUrl}J.+Cole+-+c+l+o+s+e.mp3`,
	`${lateNightsUrl}J.+Cole%2C+Bas%2C+6LACK+-+l+e+t+.+g+o+.+m+y+.+h+a+n+d+(with+Bas+%26+6LACK).mp3`,
	`${lateNightsUrl}Jarreau+Vandal%2C+Olivia+Nelson+-+Someone+That+You+Love.mp3`,
	`${lateNightsUrl}Jenevieve+-+Baby+Powder.mp3`,
	`${lateNightsUrl}Jenevieve+-+Medallion.mp3`,
	`${lateNightsUrl}Joe+Hertz%2C+Non%C3%B4+-+M%C3%B8%C3%B8n.mp3`,
	`${lateNightsUrl}JON+VINYL+-+Addicted.mp3`,
	`${lateNightsUrl}JON+VINYL+-+Star-Crossed.mp3`,
	`${lateNightsUrl}JONES+-+Camera+Flash.mp3`,
	`${lateNightsUrl}Jordan+Ward+-+Lil+Baby+Crush.mp3`,
	`${lateNightsUrl}Jorja+Smith%2C+Preditah+-+On+My+Mind+(Jorja+Smith+X+Preditah).mp3`,
	`${lateNightsUrl}Joyce+Wrice%2C+Freddie+Gibbs+-+On+One.mp3`,
	`${lateNightsUrl}Joyce+Wrice%2C+KAYTRANADA+-+Iced+Tea.mp3`,
	`${lateNightsUrl}Joyce+Wrice%2C+Westside+Gunn%2C+ESTA.+-+Westside+Gunn's+Interlude+(feat.+Westside+Gunn+%26+ESTA.).mp3`,
	`${lateNightsUrl}Kanye+West+-+No+Mistakes.mp3`,
	`${lateNightsUrl}Katana+-+PLAYGIRL.mp3`,
	`${lateNightsUrl}KAYTRANADA+-+DO+IT.mp3`,
	`${lateNightsUrl}KAYTRANADA%2C+Iman+Omari+-+2+The+Music.mp3`,
	`${lateNightsUrl}KAYTRANADA%2C+Mick+Jenkins+-+Gray+Area+(feat.+Mick+Jenkins).mp3`,
	`${lateNightsUrl}kezia+-+megan+fox.mp3`,
	`${lateNightsUrl}KhakiKid%2C+Bricknasty+-+Breakfast+on+Pluto.mp3`,
	`${lateNightsUrl}Khalid%2C+Swae+Lee+-+The+Ways+(with+Swae+Lee).mp3`,
	`${lateNightsUrl}Kiana+Led%C3%A9+-+Mad+At+Me..mp3`,
	`${lateNightsUrl}Kill+Bill+-++The+Rapper%2C+Rekcahdam%2C+Rav+-+Dream+Eater.mp3`,
	`${lateNightsUrl}KIRINJI%2C+YonYon+-+killer+tune+kills+me.mp3`,
	`${lateNightsUrl}Kito%2C+VanJess%2C+Channel+Tres+-+Recap+(with+VanJess+%26+Channel+Tres).mp3`,
	`${lateNightsUrl}Kitty+Ca%24h%2C+Kiana+Led%C3%A9+-+Just+Fine+(feat.+Kiana+Led%C3%A9).mp3`,
	`${lateNightsUrl}Kyle+Dion%2C+Duckwrth%2C+UMI+-+Play+Too+Much.mp3`,
	`${lateNightsUrl}Lani+Rose+-+Overreacting.mp3`,
	`${lateNightsUrl}Lani+Rose+-+Warm+Blanket.mp3`,
	`${lateNightsUrl}Larry+June+-+Around+the+World.mp3`,
	`${lateNightsUrl}Lauren+Spencer-Smith+-+Fingers+Crossed.mp3`,
	`${lateNightsUrl}Lo+Village+-+NERD.mp3`,
	`${lateNightsUrl}Lo+Village+-+Out+The+Window.mp3`,
	`${lateNightsUrl}Lola+Young+-+None+For+You.mp3`,
	`${lateNightsUrl}lophiile%2C+Col3trane%2C+Amber+Mark+-+No+Bus.mp3`,
	`${lateNightsUrl}Lord's+Child%2C+Montell+Fish%2C+chromonicci+-+Show+the+Signs..mp3`,
	`${lateNightsUrl}Luke+Gomm+-+I'm+Thru.mp3`,
	`${lateNightsUrl}Mac+Ayres+-+Where+U+Goin'+Tonight.mp3`,
	`${lateNightsUrl}Mac+Ayres%2C+CARRTOONS+-+Never+Let+Me+Go.mp3`,
	`${lateNightsUrl}Macross+82-99+-+%E3%80%8E82.99+F.M%E3%80%8F.mp3`,
	`${lateNightsUrl}Macross+82-99+-+Fun+Tonight.mp3`,
	`${lateNightsUrl}Marc+Rebillet+-+Surviving.mp3`,
	`${lateNightsUrl}Mar%C3%ADa+Isabel%2C+Yeek+-+Where+Does+The+Love+Go.mp3`,
	`${lateNightsUrl}Mariah+Carey+-+My+All.mp3`,
	`${lateNightsUrl}Mariah+the+Scientist+-+Revenge.mp3`,
	`${lateNightsUrl}Mariah+the+Scientist%2C+Young+Thug+-+Walked+In+(feat.+Young+Thug).mp3`,
	`${lateNightsUrl}Masego%2C+Devin+Morrison+-+Yamz.mp3`,
	`${lateNightsUrl}Masego%2C+Don+Toliver+-+Mystery+Lady.mp3`,
	`${lateNightsUrl}Maverick+Sabre%2C+Jorja+Smith%2C+Vintage+Culture%2C+Slow+Motion+-+Slow+Down+(feat.+Jorja+Smith)+-+Vintage+Culture+%26+Slow+Motion+Remix.mp3`,
	`${lateNightsUrl}Mereba%2C+JID+-+Sandstorm+(feat.+JID).mp3`,
	`${lateNightsUrl}Metro+Boomin%2C+Travis+Scott+-+Only+1+(Interlude)+(with+Travis+Scott).mp3`,
	`${lateNightsUrl}Miguel+-+Sure+Thing.mp3`,
	`${lateNightsUrl}Miki+Matsubara+-+Mayonaka+no+Door++Stay+With+Me.mp3`,
	`${lateNightsUrl}Mk.gee+-+cz.mp3`,
	`${lateNightsUrl}Mk.gee+-+You.mp3`,
	`${lateNightsUrl}Monsune+-+CLOUD.mp3`,
	`${lateNightsUrl}Moo+Latte%2C+Iman+Omari+-+Movement.mp3`,
	`${lateNightsUrl}Musiq+Soulchild+-+Just+Friends+(Sunny).mp3`,
	`${lateNightsUrl}Nao+-+Drive+and+Disconnect.mp3`,
	`${lateNightsUrl}Neemz+-+Lifethativebeenlivin.mp3`,
	`${lateNightsUrl}Nick+Hakim+-+ALL+THESE+CHANGES.mp3`,
	`${lateNightsUrl}Norman+Connors+-+Invitation.mp3`,
	`${lateNightsUrl}ODIE+-+North+Face.mp3`,
	`${lateNightsUrl}Ojerime+-+Give+It+Up+2+Me.mp3`,
	`${lateNightsUrl}Paperboy+Fabe%2C+Brent+Faiyaz+-+Language.mp3`,
	`${lateNightsUrl}PinkPantheress+-+Attracted+To+You.mp3`,
	`${lateNightsUrl}PinkPantheress+-+Passion.mp3`,
	`${lateNightsUrl}Quarteto+Em+Cy+-+Tudo+Que+Voce+Podia+Ser.mp3`,
	`${lateNightsUrl}Rav+-+You+Fuckers+Were+Asking+for+This+One+-+Boin+Edit.mp3`,
	`${lateNightsUrl}Raw+-+B%2C+Louisdakidd+-+Vacation.mp3`,
	`${lateNightsUrl}redveil+-+Campbell.mp3`,
	`${lateNightsUrl}redveil+-+Weight.mp3`,
	`${lateNightsUrl}reggie%2C+Smino+-+Avalanche.mp3`,
	`${lateNightsUrl}Rejjie+Snow%2C+Cam+O'bi%2C+grouptherapy.+-+Relax.mp3`,
	`${lateNightsUrl}Rexx+Life+Raj%2C+Fireboy+DML%2C+Wale+-+Beauty+In+The+Madness.mp3`,
	`${lateNightsUrl}Rexx+Life+Raj%2C+Nef+The+Pharaoh+-+Moxie+Java.mp3`,
	`${lateNightsUrl}RIMON+-+Grace.mp3`,
	`${lateNightsUrl}RIMON+-+never+learned+how+to+cope.mp3`,
	`${lateNightsUrl}RIMON+-+Out+Of+My+Way.mp3`,
	`${lateNightsUrl}ROMderful+-+ALIENS!.mp3`,
	`${lateNightsUrl}Ryan+Trey+-+It's+About+A+Girl.mp3`,
	`${lateNightsUrl}S.+Kiyotaka+%26+Omega+Tribe%2C+Kiyotaka+Sugiyama+-+Summer+Suspicion.mp3`,
	`${lateNightsUrl}Sabrina+Claudio+-+Unravel+Me.mp3`,
	`${lateNightsUrl}Sabrina+Claudio%2C+6LACK+-+Belong+to+You+(feat.+6LACK).mp3`,
	`${lateNightsUrl}Sam+Ezeh+-+CRISIS.mp3`,
	`${lateNightsUrl}Samaria+-+Out+the+Way.mp3`,
	`${lateNightsUrl}Sampa+the+Great+-+Final+Form.mp3`,
	`${lateNightsUrl}Sampa+the+Great+-+Freedom.mp3`,
	`${lateNightsUrl}SAULT+-+Wildfires.mp3`,
	`${lateNightsUrl}ScHoolboy+Q+-+By+Any+Means.mp3`,
	`${lateNightsUrl}Seu+Jorge+-+Amiga+Da+Minha+Mulher.mp3`,
	`${lateNightsUrl}Shay+Lia%2C+Buddy+-+Voodoo.mp3`,
	`${lateNightsUrl}Sin%C3%A9ad+Harnett%2C+Masego%2C+VanJess+-+Stickin'+(feat.+Masego+%26+VanJess).mp3`,
	`${lateNightsUrl}Snoh+Aalegra+-+Charleville+9200%2C+Pt.+II.mp3`,
	`${lateNightsUrl}Snoh+Aalegra+-+I+Want+You+Around.mp3`,
	`${lateNightsUrl}Snoh+Aalegra+-+LOST+YOU.mp3`,
	`${lateNightsUrl}Snoh+Aalegra%2C+James+Fauntleroy+-+Charleville+9200.mp3`,
	`${lateNightsUrl}Snoh+Aalegra%2C+James+Fauntleroy+-+ON+MY+MIND+feat.+James+Fauntleroy.mp3`,
	`${lateNightsUrl}Stevedreez+-+STAY+UP.mp3`,
	`${lateNightsUrl}Stromae+-+Formidable.mp3`,
	`${lateNightsUrl}Sunni+Col%C3%B3n+-+Mornin+Dew.mp3`,
	`${lateNightsUrl}Sunni+Col%C3%B3n+-+Supernova.mp3`,
	`${lateNightsUrl}Teedra+Moses%2C+KAYTRANADA+-+Be+Your+Girl+(Kaytranada+Edition).mp3`,
	`${lateNightsUrl}Terrace+Martin%2C+Robert+Glasper%2C+9th+Wonder%2C+Kamasi+Washington%2C+Dinner+Party%2C+Phoelix+-+Freeze+Tag+(feat.+Phoelix).mp3`,
	`${lateNightsUrl}Tessie+-+Out+At+Sea.mp3`,
	`${lateNightsUrl}The+Isley+Brothers+-+Summer+Breeze%2C+Pts.+1+%26+2.mp3`,
	`${lateNightsUrl}The+Mar%C3%ADas+-+Cari%C3%B1o.mp3`,
	`${lateNightsUrl}The+Weeknd+-+Die+For+You.mp3`,
	`${lateNightsUrl}The+Weeknd+-+Out+of+Time.mp3`,
	`${lateNightsUrl}theMIND+-+Ms.+Communication.mp3`,
	`${lateNightsUrl}Thundercat+-+Dragonball+Durag.mp3`,
	`${lateNightsUrl}Tiwa+Savage+-+Koroba.mp3`,
	`${lateNightsUrl}Tony!+Toni!+Ton%C3%A9!%2C+DJ+Quik+-+Let's+Get+Down.mp3`,
	`${lateNightsUrl}Towkio+-+Reflection.mp3`,
	`${lateNightsUrl}Towkio%2C+Chance+the+Rapper%2C+Lido%2C+Eryn+Allen+Kane+-+Heaven+Only+Knows.mp3`,
	`${lateNightsUrl}TWENTY88+-+D%C3%A9j%C3%A0+vu.mp3`,
	`${lateNightsUrl}UMI+-+everything+will+be+alright.mp3`,
	`${lateNightsUrl}Unusual+Demont+-+Amber.mp3`,
	`${lateNightsUrl}Unusual+Demont+-+BLUSH.mp3`,
	`${lateNightsUrl}Unusual+Demont+-+Pine.mp3`,
	`${lateNightsUrl}Vince+Staples%2C+Foushe%C3%A9+-+TAKE+ME+HOME.mp3`,
	`${lateNightsUrl}WeAreYou%2C+LaRussell%2C+Tessie+-+Shhhlide.mp3`,
	`${lateNightsUrl}Xella+-+Don't+You+Worry.mp3`,
	`${lateNightsUrl}Xella+-+Hardway.mp3`,
	`${lateNightsUrl}Xella+-+Kiwi+Champagne.mp3`,
	`${lateNightsUrl}Yebba%2C+A%24AP+Rocky+-+Far+Away+(feat.+A%24AP+Rocky).mp3`,
	`${lateNightsUrl}Yeek+-+Freaky+(RGB).mp3`,
	`${lateNightsUrl}Yeek+-+Only+in+the+West.mp3`,
	`${lateNightsUrl}Yves+Tumor+-+Romanticist.mp3`
];

const theCookout = [
	`${theCookoutUrl}Zapp+-+More+Bounce+to+the+Ounce.mp3`,
	`${theCookoutUrl}Zapp+-+Doo+Wa+Ditty+(Blow+That+Thing).mp3`,
	`${theCookoutUrl}Wild+Cherry+-+Play+That+Funky+Music.mp3`,
	`${theCookoutUrl}Whitney+Houston+-+My+Love+Is+Your+Love.mp3`,
	`${theCookoutUrl}Vaughan+Mason+and+Crew+-+Bounce%2C+Rock%2C+Skate%2C+Roll+-+Remastered.mp3`,
	`${theCookoutUrl}Tony!+Toni!+Ton%C3%A9!+-+Whatever+You+Want.mp3`,
	`${theCookoutUrl}Tony!+Toni!+Ton%C3%A9!+-+Feels+Good.mp3`,
	`${theCookoutUrl}The+Whispers+-+And+the+Beat+Goes+On+-+Radio+Version.mp3`,
	`${theCookoutUrl}The+Trammps+-+Disco+Inferno+-+Single+Edit.mp3`,
	`${theCookoutUrl}The+Sugarhill+Gang+-+Rapper's+Delight.mp3`,
	`${theCookoutUrl}The+Sugarhill+Gang+-+Apache+-+45+Version.mp3`,
	`${theCookoutUrl}The+Staple+Singers+-+I'll+Take+You+There.mp3`,
	`${theCookoutUrl}The+Spinners+-+It's+A+Shame.mp3`,
	`${theCookoutUrl}The+O'Jays+-+Use+ta+Be+My+Girl.mp3`,
	`${theCookoutUrl}The+O'Jays+-+Love+Train.mp3`,
	`${theCookoutUrl}The+O'Jays+-+For+the+Love+of+Money.mp3`,
	`${theCookoutUrl}The+O'Jays+-+Back+Stabbers.mp3`,
	`${theCookoutUrl}The+Jacksons+-+Shake+Your+Body+(Down+to+the+Ground).mp3`,
	`${theCookoutUrl}The+Jacksons+-+Blame+It+on+the+Boogie.mp3`,
	`${theCookoutUrl}The+Isley+Brothers+-+This+Old+Heart+Of+Mine+(Is+Weak+For+You).mp3`,
	`${theCookoutUrl}The+Isley+Brothers+-+That+Lady%2C+Pts.+1+%26+2.mp3`,
	`${theCookoutUrl}The+Isley+Brothers+-+It's+Your+Thing.mp3`,
	`${theCookoutUrl}The+Gap+Band+-+You+Dropped+A+Bomb+On+Me.mp3`,
	`${theCookoutUrl}The+Gap+Band+-+Outstanding+-+Original+12'+Mix.mp3`,
	`${theCookoutUrl}The+Foundations+-+Build+Me+Up+Buttercup+-+Mono.mp3`,
	`${theCookoutUrl}The+Emotions+-+Best+of+My+Love.mp3`,
	`${theCookoutUrl}The+Brothers+Of+Soul+-+Can't+Get+You+Off+of+My+Mind.mp3`,
	`${theCookoutUrl}The+Brothers+Johnson+-+Stomp!+-+Single+Version.mp3`,
	`${theCookoutUrl}The+Brothers+Johnson+-+I'll+Be+Good+To+You.mp3`,
	`${theCookoutUrl}Teena+Marie+-+Square+Biz.mp3`,
	`${theCookoutUrl}Spandau+Ballet+-+True+-+2003+Remaster.mp3`,
	`${theCookoutUrl}Soul+II+Soul%2C+Caron+Wheeler+-+Back+To+Life.mp3`,
	`${theCookoutUrl}Snoop+Dogg%2C+Charlie+Wilson%2C+Justin+Timberlake+-+Signs.mp3`,
	`${theCookoutUrl}Slave+-+Watching+You.mp3`,
	`${theCookoutUrl}Sister+Sledge+-+We+Are+Family+-+1995+Remaster.mp3`,
	`${theCookoutUrl}Santana%2C+The+Product+G%26B+-+Maria+Maria+(feat.+The+Product+G%26B).mp3`,
	`${theCookoutUrl}Santana%2C+Rob+Thomas+-+Smooth+(feat.+Rob+Thomas).mp3`,
	`${theCookoutUrl}Rufus%2C+Chaka+Khan+-+Sweet+Thing.mp3`,
	`${theCookoutUrl}Rufus%2C+Chaka+Khan+-+Ain't+Nobody.mp3`,
	`${theCookoutUrl}Rufus+%26+Chaka+Khan%2C+Chaka+Khan+-+Tell+Me+Something+Good.mp3`,
	`${theCookoutUrl}Michael+Jackson+-+Butterflies.mp3`,
	`${theCookoutUrl}McFadden+%26+Whitehead+-+Ain't+No+Stoppin'+Us+Now.mp3`,
	`${theCookoutUrl}Maze%2C+Frankie+Beverly+-+Before+I+Let+Go.mp3`,
	`${theCookoutUrl}Mary+Jane+Girls+-+In+My+House.mp3`,
	`${theCookoutUrl}Mary+J.+Blige+-+I'm+Goin'+Down.mp3`,
	`${theCookoutUrl}Marvin+Gaye%2C+Tammi+Terrell+-+Ain't+No+Mountain+High+Enough.mp3`,
	`${theCookoutUrl}Marvin+Gaye+-+I+Want+You.mp3`,
	`${theCookoutUrl}Marvin+Gaye+-+Got+To+Give+It+Up+-+Pt.+1.mp3`,
	`${theCookoutUrl}Marlena+Shaw+-+California+Soul.mp3`,
	`${theCookoutUrl}Mark+Morrison+-+Return+of+the+Mack.mp3`,
	`${theCookoutUrl}Mariah+Carey+-+My+All.mp3`,
	`${theCookoutUrl}Mariah+Carey+-+Fantasy.mp3`,
	`${theCookoutUrl}Luther+Vandross+-+Never+Too+Much.mp3`,
	`${theCookoutUrl}Luniz%2C+Michael+Marshall+-+I+Got+5+On+It.mp3`,
	`${theCookoutUrl}Levert+-+Casanova.mp3`,
	`${theCookoutUrl}Lakeside+-+Fantastic+Voyage.mp3`,
	`${theCookoutUrl}L.T.D.+-+(Every+Time+I+Turn+Around)+Back+In+Love+Again.mp3`,
	`${theCookoutUrl}Kool+%26+The+Gang+-+Ladies+Night.mp3`,
	`${theCookoutUrl}Kool+%26+The+Gang+-+Hi+Di+Hi%2C+Hi+De+Ho.mp3`,
	`${theCookoutUrl}Kool+%26+The+Gang+-+Get+Down+On+It+-+Single+Version.mp3`,
	`${theCookoutUrl}KC+%26+The+Sunshine+Band+-+That's+the+Way+(I+Like+It)+-+2004+Remaster.mp3`,
	`${theCookoutUrl}KC+%26+The+Sunshine+Band+-+Get+Down+Tonight+-+2004+Remaster.mp3`,
	`${theCookoutUrl}KC+%26+The+Sunshine+Band+-+Boogie+Shoes.mp3`,
	`${theCookoutUrl}India.Arie+-+Video.mp3`,
	`${theCookoutUrl}Heatwave+-+The+Groove+Line.mp3`,
	`${theCookoutUrl}Heatwave+-+Boogie+Nights.mp3`,
	`${theCookoutUrl}Harold+Melvin+%26+The+Blue+Notes%2C+Teddy+Pendergrass+-+Wake+Up+Everybody+(feat.+Teddy+Pendergrass).mp3`,
	`${theCookoutUrl}Harold+Melvin+%26+The+Blue+Notes%2C+Teddy+Pendergrass+-+The+Love+I+Lost+(feat.+Teddy+Pendergrass).mp3`,
	`${theCookoutUrl}Grover+Washington%2C+Jr.%2C+Bill+Withers+-+Just+the+Two+of+Us+(feat.+Bill+Withers).mp3`,
	`${theCookoutUrl}Gloria+Gaynor+-+I+Will+Survive+-+Single+Version.mp3`,
	`${theCookoutUrl}George+Benson+-+Give+Me+the+Night.mp3`,
	`${theCookoutUrl}Four+Tops+-+I+Can't+Help+Myself+(Sugar+Pie%2C+Honey+Bunch).mp3`,
	`${theCookoutUrl}Evelyn+'Champagne'+King+-+Love+Come+Down+-+Single+Version.mp3`,
	`${theCookoutUrl}Evelyn+'Champagne'+King+-+I'm+In+Love.mp3`,
	`${theCookoutUrl}Earth%2C+Wind+%26+Fire%2C+The+Emotions+-+Boogie+Wonderland.mp3`,
	`${theCookoutUrl}Earth%2C+Wind+%26+Fire%2C+Lucky+Daye+-+You+Want+My+Love.mp3`,
	`${theCookoutUrl}Earth%2C+Wind+%26+Fire+-+Sing+a+Song.mp3`,
	`${theCookoutUrl}Earth%2C+Wind+%26+Fire+-+Shining+Star.mp3`,
	`${theCookoutUrl}Earth%2C+Wind+%26+Fire+-+September.mp3`,
	`${theCookoutUrl}Earth%2C+Wind+%26+Fire+-+Let's+Groove.mp3`,
	`${theCookoutUrl}Earth%2C+Wind+%26+Fire+-+Fantasy+-+Single+Version.mp3`,
	`${theCookoutUrl}Earth%2C+Wind+%26+Fire+-+After+the+Love+Has+Gone.mp3`,
	`${theCookoutUrl}Donna+Summer+-+Bad+Girls.mp3`,
	`${theCookoutUrl}DeBarge+-+Stay+With+Me.mp3`,
	`${theCookoutUrl}Dazz+Band+-+Let+It+Whip.mp3`,
	`${theCookoutUrl}Daft+Punk%2C+Pharrell+Williams+-+Lose+Yourself+to+Dance+(feat.+Pharrell+Williams).mp3`,
	`${theCookoutUrl}Curtis+Mayfield+-+Move+on+Up.mp3`,
	`${theCookoutUrl}Con+Funk+Shun+-+Ffun.mp3`,
	`${theCookoutUrl}Commodores+-+Easy.mp3`,
	`${theCookoutUrl}Commodores+-+Brick+House.mp3`,
	`${theCookoutUrl}CHIC+-+Le+Freak.mp3`,
	`${theCookoutUrl}CHIC+-+Good+Times+-+2018+Remaster.mp3`,
	`${theCookoutUrl}Cheryl+Lynn+-+Got+to+Be+Real+-+Single+Version.mp3`,
	`${theCookoutUrl}Cherrelle%2C+Alexander+O'Neal+-+Saturday+Love.mp3`,
	`${theCookoutUrl}Chaka+Khan+-+Through+the+Fire.mp3`,
	`${theCookoutUrl}Chaka+Khan+-+I'm+Every+Woman.mp3`,
	`${theCookoutUrl}CeeLo+Green+-+Fool+for+You+(feat.+Philip+Bailey).mp3`,
	`${theCookoutUrl}Carl+Carlton+-+She's+A+Bad+Mama+Jama+(She's+Built%2C+She's+Stacked)+-+Single+Version.mp3`,
	`${theCookoutUrl}Cameo+-+Word+Up.mp3`,
	`${theCookoutUrl}Cameo+-+Candy.mp3`,
	`${theCookoutUrl}Brownstone+-+If+You+Love+Me.mp3`,
	`${theCookoutUrl}Brick+-+Dazz+-+Single+Version.mp3`,
	`${theCookoutUrl}Brenda+Russell+-+Piano+In+The+Dark.mp3`,
	`${theCookoutUrl}Bow+Wow%2C+Omarion+-+Let+Me+Hold+You+(feat.+Omarion).mp3`,
	`${theCookoutUrl}Bow+Wow%2C+Ciara+-+Like+You+(feat.+Ciara).mp3`,
	`${theCookoutUrl}Bootsy+Collins+-+I'd+Rather+Be+with+You.mp3`,
	`${theCookoutUrl}Bobby+Womack+-+Across+110th+Street.mp3`,
	`${theCookoutUrl}Bobby+Caldwell+-+What+You+Won't+Do+for+Love.mp3`,
	`${theCookoutUrl}Blu+Cantrell+-+Hit+'Em+Up+Style+(Oops!).mp3`,
	`${theCookoutUrl}Billy+Paul+-+Me+and+Mrs.+Jones.mp3`,
	`${theCookoutUrl}Bill+Withers+-+Lovely+Day.mp3`,
	`${theCookoutUrl}Beverley+Knight+-+Flavour+of+the+Old+School.mp3`,
	`${theCookoutUrl}Bee+Gees+-+You+Should+Be+Dancing+-+Edit++From+'Saturday+Night+Fever'+Soundtrack.mp3`,
	`${theCookoutUrl}Bee+Gees+-+Stayin+Alive.mp3`,
	`${theCookoutUrl}Barry+White+-+Can't+Get+Enough+Of+Your+Love%2C+Babe.mp3`,
	`${theCookoutUrl}Aretha+Franklin+-+Respect.mp3`,
	`${theCookoutUrl}Anita+Ward+-+Ring+My+Bell.mp3`,
	`${theCookoutUrl}Anita+Baker+-+Sweet+Love.mp3`,
	`${theCookoutUrl}Anita+Baker+-+Lately.mp3`,
	`${theCookoutUrl}Anita+Baker+-+Caught+up+In+the+Rapture.mp3`,
	`${theCookoutUrl}Al+Green+-+Let's+Stay+Together.mp3`,
	`${theCookoutUrl}Aaliyah+-+Try+Again.mp3`,
	`${theCookoutUrl}A+Taste+Of+Honey+-+Boogie+Oogie+Oogie+-+Remastered+2004.mp3`
];

export const playlists = {
	lateNights: lateNights,
	beenTurnt: beenTurnt,
	theCookout: theCookout
};
