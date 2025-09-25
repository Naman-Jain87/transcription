import { Router } from 'express';
import { getAllTranscriptions, postTranscription } from '../controllers/transcriptionController';

const router = Router();

router.post('/', postTranscription);
router.get('/', getAllTranscriptions);


export default router;
