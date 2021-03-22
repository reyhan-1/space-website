import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";

function initFontAwesome() {
    library.add(fab, faInstagram, faLinkedin, faGithub);
}
export default initFontAwesome;