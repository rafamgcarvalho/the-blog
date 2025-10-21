import { format, formatDistanceToNow as dateFnsformatDistanceToNow} from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(rawDate: string): string {
  const date = new Date(rawDate);

  return format(date, "dd/MM/yyyy 'às' HH'h'mm", {
    locale: ptBR,
  });
}

export function formatDistanceToNow(rawDate: string): string {
  const date = new Date(rawDate);

  return dateFnsformatDistanceToNow(date, {
    locale: ptBR,
    addSuffix: true,
  });
}

export function formatHour(timestampMs: number): string {
  const date = new Date(timestampMs);

  return format(date, 'HH:mm:ss', {
    locale: ptBR,
  });
}
