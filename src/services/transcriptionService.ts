import Transcription, { ITranscription } from '../models/Transcription';

export async function createTranscription(audioUrl: string): Promise<ITranscription> {
  const transcriptionText = 'transcribed text';

  const transcription = new Transcription({
    audioUrl,
    transcription: transcriptionText,
    createdAt: new Date()
  });

  return await transcription.save();
}
