import * as Tabs from "@radix-ui/react-tabs";

export default function RoomsTabs({
    value, onChange,
}: { value: string; onChange: (v: string) => void }) {
    return (
        <Tabs.Root value={value} onValueChange={onChange}>
            <Tabs.List className="rooms-tabs__list">
                <Tabs.Trigger value="all" className="rooms-tabs__trigger">All Devices</Tabs.Trigger>
                <Tabs.Trigger value="living" className="rooms-tabs__trigger">Living Room</Tabs.Trigger>
                <Tabs.Trigger value="bedroom" className="rooms-tabs__trigger">Bedroom</Tabs.Trigger>
                <Tabs.Trigger value="kitchen" className="rooms-tabs__trigger">Kitchen</Tabs.Trigger>
                <Tabs.Trigger value="hall" className="rooms-tabs__trigger">Hall</Tabs.Trigger>
            </Tabs.List>
        </Tabs.Root>
    );
}
