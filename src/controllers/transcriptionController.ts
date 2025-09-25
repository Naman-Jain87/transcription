import { Request, Response } from 'express';
import { createTranscription } from '../services/transcriptionService';
import Transcription from '../models/Transcription';
import mongoose from 'mongoose';

export async function postTranscription(req: Request, res: Response) {
  try {
    const { audioUrl } = req.body;
    if (!audioUrl) {
      return res.status(400).json({ error: 'audioUrl is required' });
    }

    const transcription = await createTranscription(audioUrl);
    return res.status(201).json({ id: transcription._id });
  } catch (error) {
    console.error('Error creating transcription:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function getAllTranscriptions(req: Request, res: Response) {
  try {
    const transcriptions = await Transcription.find(); // fetch all
    return res.status(200).json(transcriptions);       // return as JSON
  } catch (error) {
    console.error('Error fetching transcriptions:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

export async function deleteTranscriptionById(req: Request, res: Response) {
  try {
      const { id } = req.params;
      console.log( req.params);
      
      if (!id) {
         return res.status(400).json({ error: 'id is required' });
      }
      return

      let result = {};
      result = await Transcription.deleteOne({ _id: id });
      if (result) {
        return res.status(200).json({ success: true, message: 'Transcription Deleted Successfully' });
      }
  } catch (error) {
    console.error('Error deleting transcriptions:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}