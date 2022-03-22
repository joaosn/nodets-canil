import { Router}    from "express";
import * as pageC    from '../controllers/pageController';
import * as searcheC from '../controllers/searcheController';

const router = Router();

router.get('/',      pageC.home);
router.get('/dogs',  pageC.dogs);
router.get('/cats',  pageC.cats);
router.get('/fishes',pageC.fishes);

router.get('/search',searcheC.search);

export default router;