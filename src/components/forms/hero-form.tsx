
"use client";

import { useState, useTransition, useRef } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CalendarIcon, Loader2, ArrowRight, ArrowLeft, CheckCircle2, Phone, XCircle, Plus, Minus, Users, Wrench, Box as BoxIcon, Mic, Upload, StopCircle, Trash2, MicOff, Paperclip } from "lucide-react";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import Link from 'next/link';

import { MultiStepFormSchema, type MultiStepFormValues } from "@/lib/types";
import { cn } from "@/lib/utils";
import { submitLead } from "@/lib/actions";
import { WHATSAPP_MESSAGE_BASE } from "@/lib/constants";
import { useToast } from "@/hooks/use-toast";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { RainbowButton } from "../ui/rainbow-button";
import { Separator } from "../ui/separator";
import { Alert, AlertDescription, AlertTitle } from "../ui/alert";

const steps = [
    { id: 1, title: 'Contato e Mudança', fields: ['name', 'phone', 'origin', 'destination', 'date', 'urgency'] },
    { id: 2, title: 'Equipe Necessária', fields: ['helpers_origin', 'helpers_destination', 'assemblers_origin', 'assemblers_destination', 'packers'] },
    { id: 3, title: 'Revisão e Itens', fields: ['itemsList', 'lgpd'] },
];

const NumberInput = ({ value, onChange }: { value: number; onChange: (val: number) => void; }) => {
    return (
        <div className="flex items-center gap-2">
            <Button type="button" variant="default" size="icon" className="h-8 w-8 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => onChange(Math.max(0, value - 1))}>
                <Minus className="h-4 w-4" />
            </Button>
            <Input
                type="number"
                className="w-12 text-center font-bold bg-accent text-accent-foreground"
                value={value}
                onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
            />
            <Button type="button" variant="default" size="icon" className="h-8 w-8 bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => onChange(value + 1)}>
                <Plus className="h-4 w-4" />
            </Button>
        </div>
    );
};

const TeamControlCard = ({ icon: Icon, title, control, originFieldName, destinationFieldName }: { icon: React.ElementType, title: string, control: any, originFieldName: keyof MultiStepFormValues, destinationFieldName: keyof MultiStepFormValues }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon className="h-8 w-8 text-primary" />
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <FormField
                    control={control}
                    name={originFieldName}
                    render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                            <FormLabel>Ajudantes na Origem</FormLabel>
                            <FormControl>
                                <NumberInput value={field.value as number || 0} onChange={field.onChange} />
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={control}
                    name={destinationFieldName}
                    render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                            <FormLabel>Ajudantes no Destino</FormLabel>
                            <FormControl>
                                <NumberInput value={field.value as number || 0} onChange={field.onChange} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </CardContent>
        </Card>
    );
}

const PackersControlCard = ({ icon: Icon, title, control, fieldName }: { icon: React.ElementType, title: string, control: any, fieldName: keyof MultiStepFormValues }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                    <Icon className="h-8 w-8 text-primary" />
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                <FormField
                    control={control}
                    name={fieldName}
                    render={({ field }) => (
                        <FormItem className="flex items-center justify-between">
                            <FormLabel>Embaladores na Origem</FormLabel>
                            <FormControl>
                                <NumberInput value={field.value as number || 0} onChange={field.onChange} />
                            </FormControl>
                        </FormItem>
                    )}
                />
            </CardContent>
        </Card>
    );
}


const Summary = ({ control }: { control: any }) => {
    const values = useWatch({ control });
    const { helpers_origin = 0, helpers_destination = 0, assemblers_origin = 0, assemblers_destination = 0, packers = 0 } = values;

    const hasTeam = helpers_origin > 0 || helpers_destination > 0 || assemblers_origin > 0 || assemblers_destination > 0 || packers > 0;

    return (
        <Card className="bg-secondary/50">
            <CardHeader>
                <CardTitle className="text-lg">Resumo da Equipe</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
                {hasTeam ? (
                    <>
                        {helpers_origin > 0 && <div className="flex justify-between"><span><Users className="inline h-4 w-4 mr-2" />Ajudantes (Origem):</span> <span className="font-semibold">{helpers_origin}</span></div>}
                        {helpers_destination > 0 && <div className="flex justify-between"><span><Users className="inline h-4 w-4 mr-2" />Ajudantes (Destino):</span> <span className="font-semibold">{helpers_destination}</span></div>}
                        {assemblers_origin > 0 && <div className="flex justify-between"><span><Wrench className="inline h-4 w-4 mr-2" />Montadores (Origem):</span> <span className="font-semibold">{assemblers_origin}</span></div>}
                        {assemblers_destination > 0 && <div className="flex justify-between"><span><Wrench className="inline h-4 w-4 mr-2" />Montadores (Destino):</span> <span className="font-semibold">{assemblers_destination}</span></div>}
                        {packers > 0 && <div className="flex justify-between"><span><BoxIcon className="inline h-4 w-4 mr-2" />Embaladores (Origem):</span> <span className="font-semibold">{packers}</span></div>}
                    </>
                ) : (
                    <p className="text-muted-foreground text-center">Nenhuma equipe adicional selecionada.</p>
                )}
            </CardContent>
        </Card>
    );
}

export function HeroForm() {
    const [currentStep, setCurrentStep] = useState(0);
    const [isPending, startTransition] = useTransition();
    const { toast } = useToast();
    const [submissionResult, setSubmissionResult] = useState<{ success: boolean; message: string; data?: any } | null>(null);
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const recognitionRef = useRef<any>(null);
    const initialTextRef = useRef<string>("");


    const form = useForm<MultiStepFormValues>({
        resolver: zodResolver(MultiStepFormSchema),
        defaultValues: {
            name: "",
            phone: "",
            origin: "",
            destination: "",
            helpers_origin: 1,
            helpers_destination: 1,
            assemblers_origin: 1,
            assemblers_destination: 1,
            packers: 0,
            itemsList: "",
        },
    });

    const { control, setValue, clearErrors, getValues } = form;

    const toggleListening = () => {
        if (isListening) {
            if (recognitionRef.current) {
                recognitionRef.current.stop();
            }
            setIsListening(false);
            return;
        }

        const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
        if (!SpeechRecognition) {
            toast({
                title: "Erro",
                description: "Seu navegador não suporta reconhecimento de fala.",
                variant: "destructive"
            });
            return;
        }

        const recognition = new SpeechRecognition();
        recognitionRef.current = recognition;
        recognition.lang = 'pt-BR';
        recognition.continuous = true;
        recognition.interimResults = true;

        initialTextRef.current = getValues('itemsList') || "";

        recognition.onstart = () => {
            setIsListening(true);
        };

        recognition.onresult = (event: any) => {
            let interimTranscript = '';
            let finalTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }

            const currentTranscript = finalTranscript || interimTranscript;
            if (currentTranscript) {
                // Append to initial text
                // Note: This simple logic appends. For continuous editing it might be tricky, 
                // but for "dictation" mode it works.
                // Actually, event.results accumulates. 
                // Let's just grab all transcripts from the session.
                const allTranscripts = Array.from(event.results)
                    .map((result: any) => result[0].transcript)
                    .join('');

                setValue('itemsList', (initialTextRef.current + (initialTextRef.current ? ' ' : '') + allTranscripts).slice(0, 5000));
            }
        };

        recognition.onerror = (event: any) => {
            console.error("Speech recognition error", event.error);
            setIsListening(false);
        };

        recognition.onend = () => {
            setIsListening(false);
        };

        recognition.start();
    };

    type FieldName = keyof MultiStepFormValues;

    const next = async () => {
        const fields = steps[currentStep].fields as FieldName[];
        const output = await form.trigger(fields, { shouldFocus: true });

        if (!output) return;

        if (currentStep < steps.length - 1) {
            setCurrentStep(step => step + 1);
        }
    };

    const prev = () => {
        if (currentStep > 0) {
            setCurrentStep(step => step - 1);
        }
    };

    const generateWhatsAppUrl = (data: any) => {
        const urgency = data.urgency ? data.urgency.charAt(0).toUpperCase() + data.urgency.slice(1) : 'Não informada';

        const message = ` --- NOVO PEDIDO DE ORÇAMENTO EASYMOVE---

--------------------

📌 Detalhes do Pedido
- Nome: ${data.name}
- Origem: ${data.origin}
- Destino: ${data.destination}
- Data do Serviço: ${data.date}
- Urgência: ${urgency}

--------------------

🛠️ Serviços Adicionais
- Ajudantes: Origem: ${data.helpers_origin || 0} | Destino: ${data.helpers_destination || 0}
- Montadores: Origem: ${data.assemblers_origin || 0} | Destino: ${data.assemblers_destination || 0}
- Embaladores: ${data.packers || 0}

--------------------

📦 Itens a Transportar
${data.itemsList || 'Nenhum item listado'}
--------------------`;

        return `${WHATSAPP_MESSAGE_BASE}${encodeURIComponent(message)}`;
    };

    function onSubmit(values: MultiStepFormValues) {
        startTransition(async () => {
            // Here you would handle the form submission.
            const result = await submitLead(values, "hero-form");
            setSubmissionResult(result);
            if (result.success) {
                toast({
                    title: "Sucesso!",
                    description: "Seu pedido de orçamento foi enviado. Redirecionando para o WhatsApp...",
                });

                // Auto-open WhatsApp
                const url = generateWhatsAppUrl(result.data);
                window.open(url, '_blank');

                // Don't reset form, so user can see success state
            } else {
                toast({
                    variant: "destructive",
                    title: "Erro!",
                    description: result.message,
                });
            }
        });
    }



    const getWhatsAppUrl = () => {
        if (!submissionResult?.success || !submissionResult.data) return "#";
        return generateWhatsAppUrl(submissionResult.data);
    };

    const resetForm = () => {
        form.reset();
        setCurrentStep(0);
        setSubmissionResult(null);
        setSubmissionResult(null);
    }

    return (
        <Card className="w-full max-w-lg shadow-2xl rounded-t-none">
            <CardHeader>
                {submissionResult === null && (
                    <>
                        <Progress value={((currentStep + 1) / (steps.length + 1)) * 100} className="w-full" />
                        <CardTitle className="text-xl pt-2">{currentStep < steps.length ? `Etapa ${currentStep + 1} de ${steps.length}: ${steps[currentStep].title}` : 'Finalizar'}</CardTitle>
                    </>
                )}
            </CardHeader>
            <CardContent>
                {submissionResult?.success ? (
                    <div className="text-center space-y-4 flex flex-col items-center">
                        <CheckCircle2 className="h-16 w-16 text-green-500" />
                        <h3 className="text-xl font-semibold">Obrigado, {submissionResult.data.name}!</h3>
                        <p className="text-muted-foreground">Sua solicitação foi recebida. Para agilizar, clique no botão abaixo e envie os detalhes pelo WhatsApp.</p>
                        <RainbowButton asChild>
                            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 flex items-center">
                                <Phone className="mr-2 h-5 w-5" />
                                Continuar no WhatsApp
                            </a>
                        </RainbowButton>
                        <Button variant="outline" onClick={resetForm} className="w-full">
                            Solicitar outro orçamento
                        </Button>
                    </div>
                ) : submissionResult?.success === false ? (
                    <div className="text-center space-y-4 flex flex-col items-center">
                        <XCircle className="h-16 w-16 text-destructive" />
                        <h3 className="text-xl font-semibold">Algo deu errado</h3>
                        <p className="text-muted-foreground">{submissionResult.message}</p>
                        <Button variant="default" onClick={resetForm} className="w-full">
                            Tentar Novamente
                        </Button>
                    </div>
                ) : (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                            {currentStep === 0 && (
                                <div className="space-y-4 animate-in fade-in-50">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormField control={form.control} name="name" render={({ field }) => (
                                            <FormItem><FormLabel>Nome Completo*</FormLabel><FormControl><Input placeholder="Seu nome" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="phone" render={({ field }) => (
                                            <FormItem><FormLabel>Telefone/WhatsApp*</FormLabel><FormControl><Input placeholder="41 9 9537-8521" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>
                                    <div className="grid grid-cols-1 gap-4">
                                        <FormField control={form.control} name="origin" render={({ field }) => (
                                            <FormItem><FormLabel>Endereço de Origem*</FormLabel><FormControl><Input placeholder="Rua, número, cidade" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                        <FormField control={form.control} name="destination" render={({ field }) => (
                                            <FormItem><FormLabel>Endereço de Destino*</FormLabel><FormControl><Input placeholder="Rua, número, cidade" className="h-12" {...field} /></FormControl><FormMessage /></FormItem>
                                        )} />
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <FormField control={form.control} name="date" render={({ field }) => (
                                            <FormItem className="flex flex-col"><FormLabel>Data da Mudança*</FormLabel>
                                                <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                                                    <PopoverTrigger asChild><FormControl>
                                                        <Button variant={"outline"} className={cn("w-full justify-start text-left font-normal h-12", !field.value && "text-muted-foreground")}>
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {field.value ? format(field.value, "PPP", { locale: ptBR }) : <span>Escolha a data</span>}
                                                        </Button>
                                                    </FormControl></PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={(date) => {
                                                                field.onChange(date);
                                                                setIsDatePickerOpen(false);
                                                            }}
                                                            disabled={(date) => date < new Date()}
                                                            initialFocus
                                                            locale={ptBR}
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                        <FormField control={form.control} name="urgency" render={({ field }) => (
                                            <FormItem className="flex flex-col"><FormLabel>Qual urgência?</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl><SelectTrigger className="h-12"><SelectValue placeholder="Selecione" /></SelectTrigger></FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="flexivel">Flexível</SelectItem>
                                                        <SelectItem value="urgente">Urgente</SelectItem>
                                                        <SelectItem value="agendada">Agendada</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )} />
                                    </div>
                                </div>
                            )}

                            {currentStep === 1 && (
                                <div className="space-y-4 animate-in fade-in-50">
                                    <TeamControlCard
                                        icon={Users}
                                        title="Ajudantes"
                                        control={control}
                                        originFieldName="helpers_origin"
                                        destinationFieldName="helpers_destination"
                                    />
                                    <TeamControlCard
                                        icon={Wrench}
                                        title="Montadores"
                                        control={control}
                                        originFieldName="assemblers_origin"
                                        destinationFieldName="assemblers_destination"
                                    />
                                    <PackersControlCard
                                        icon={BoxIcon}
                                        title="Embaladores"
                                        control={control}
                                        fieldName="packers"
                                    />
                                </div>
                            )}

                            {currentStep === 2 && (
                                <div className="space-y-6 animate-in fade-in-50">
                                    <Summary control={control} />

                                    <Separator />

                                    <FormField control={form.control} name="itemsList" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="bg-accent/20 text-accent-foreground p-2 rounded-md">Liste abaixo os principais itens da sua mudança (opcional):</FormLabel>
                                            <FormControl>
                                                <div className="relative">
                                                    <Textarea
                                                        placeholder="Ex: Geladeira, Sofá, 10 caixas..."
                                                        className="resize-none h-48 pr-12"
                                                        maxLength={5000}
                                                        {...field}
                                                    />
                                                    <div className="absolute top-2 right-2 flex flex-col gap-1">
                                                        <Button
                                                            type="button"
                                                            size="icon"
                                                            variant={isListening ? "destructive" : "ghost"}
                                                            className={cn("h-8 w-8", isListening && "animate-pulse")}
                                                            onClick={toggleListening}
                                                        >
                                                            {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
                                                        </Button>
                                                        <span className="text-[10px] text-muted-foreground text-right pr-1">
                                                            {field.value?.length || 0}/5000
                                                        </span>
                                                    </div>
                                                </div>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )} />

                                    <FormField control={form.control} name="lgpd" render={({ field }) => (
                                        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                            <FormControl><Checkbox checked={field.value} onCheckedChange={field.onChange} /></FormControl>
                                            <div className="space-y-1 leading-none"><FormLabel>Consentimento de Privacidade*</FormLabel>
                                                <FormDescription>
                                                    Concordo com a <Link href="/politica-de-privacidade" className="underline hover:text-primary">Política de Privacidade</Link> e permito o uso dos meus dados.
                                                </FormDescription>
                                                <FormMessage />
                                            </div>
                                        </FormItem>
                                    )} />
                                </div>
                            )}

                            <div className="flex gap-4 justify-between pt-4">
                                <Button type="button" variant="outline" onClick={prev} disabled={currentStep === 0 || isPending}>
                                    <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
                                </Button>
                                {currentStep < steps.length - 1 ? (
                                    <Button type="button" onClick={next} disabled={isPending}>
                                        Avançar <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                ) : (
                                    <RainbowButton type="submit" disabled={isPending}>
                                        {isPending ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...</> : "Enviar Pedido de Orçamento"}
                                    </RainbowButton>
                                )}
                            </div>

                        </form>
                    </Form>
                )}
            </CardContent>
        </Card>
    );
}
