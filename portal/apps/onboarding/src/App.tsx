import React, { useEffect, useMemo, useState } from "react";
import { roles } from "./content";
import { getRoleProgress, runSelfTests } from "./utils/onboarding";
import { BuilderShell } from "./components/layout";
import { ActionFirstPage } from "./components/onboarding";
import { TaskDetail } from "./components/task";

export default function App() {
  const [selectedRoleId, setSelectedRoleId] = useState("designer");
  const [selectedLevelId, setSelectedLevelId] = useState("middle");
  const [done, setDone] = useState<Record<string, boolean>>({});
  const [openedTaskId, setOpenedTaskId] = useState<string | null>(null);

  useEffect(() => {
    runSelfTests();
  }, []);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sdds-progress");
      if (saved) setDone(JSON.parse(saved));
    } catch (error) {
      setDone({});
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("sdds-progress", JSON.stringify(done));
    } catch (error) {
      // localStorage may be unavailable in embedded previews.
    }
  }, [done]);

  const selectedRole = useMemo(() => roles.find((role: any) => role.id === selectedRoleId) || roles[0], [selectedRoleId]);
  const selectedLevel = useMemo(() => selectedRole.levels.find((level: any) => level.id === selectedLevelId) || selectedRole.levels[0], [selectedRole, selectedLevelId]);
  const progress = useMemo(() => getRoleProgress(selectedRole, done), [selectedRole, done]);

  const selectRole = (roleId: string) => {
    const nextRole = roles.find((role: any) => role.id === roleId) || roles[0];
    setSelectedRoleId(nextRole.id);
    setSelectedLevelId(nextRole.levels[0] ? nextRole.levels[0].id : "junior");
    setOpenedTaskId(null);
  };

  const selectLevel = (levelId: string) => {
    setSelectedLevelId(levelId);
    setOpenedTaskId(null);
  };

  const toggleTask = (key: string) => {
    setDone((current) => ({ ...current, [key]: !current[key] }));
  };

  const markOpenedTaskDone = () => {
    if (!openedTaskId) return;
    setDone((current) => ({ ...current, [selectedRole.id + ":" + openedTaskId]: true }));
    setOpenedTaskId(null);
  };

  return (
    <BuilderShell
      role={selectedRole}
      level={selectedLevel}
      progress={progress}
      selectedTaskId={openedTaskId}
      done={done}
      onSelectRole={selectRole}
      onSelectLevel={selectLevel}
      onOpenTask={setOpenedTaskId}
    >
      {openedTaskId ? (
        <TaskDetail role={selectedRole} taskId={openedTaskId} onDone={markOpenedTaskDone} />
      ) : (
        <ActionFirstPage role={selectedRole} level={selectedLevel} done={done} onToggleTask={toggleTask} onOpenTask={setOpenedTaskId} />
      )}
    </BuilderShell>
  );
}
