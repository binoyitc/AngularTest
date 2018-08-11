package com.java.models;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement 
public class ScheduleJobs {
	String id;
	String name;
	String description;
	String time;
	String date;
	Boolean repeat;
	Boolean daily;
	Boolean weekly;
	Boolean monthly;
	Boolean yearly;
	Boolean monday;
	Boolean tuesday;
	Boolean wednesday;
	Boolean thursday;
	Boolean friday;
	Boolean allDayEvent;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public Boolean isRepeat() {
		return repeat;
	}
	public void setRepeat(Boolean repeat) {
		this.repeat = repeat;
	}
	public Boolean isDaily() {
		return daily;
	}
	public void setDaily(Boolean daily) {
		this.daily = daily;
	}
	public Boolean isWeekly() {
		return weekly;
	}
	public void setWeekly(Boolean weekly) {
		this.weekly = weekly;
	}
	public Boolean isMonthly() {
		return monthly;
	}
	public void setMonthly(Boolean monthly) {
		this.monthly = monthly;
	}
	public Boolean isYearly() {
		return yearly;
	}
	public void setYearly(Boolean yearly) {
		this.yearly = yearly;
	}
	public Boolean isMonday() {
		return monday;
	}
	public void setMonday(Boolean monday) {
		this.monday = monday;
	}
	public Boolean isTuesday() {
		return tuesday;
	}
	public void setTuesday(Boolean tuesday) {
		this.tuesday = tuesday;
	}
	public Boolean isWednesday() {
		return wednesday;
	}
	public void setWednesday(Boolean wednesday) {
		this.wednesday = wednesday;
	}
	public Boolean isThursday() {
		return thursday;
	}
	public void setThursday(Boolean thursday) {
		this.thursday = thursday;
	}
	public Boolean isFriday() {
		return friday;
	}
	public void setFriday(Boolean friday) {
		this.friday = friday;
	}
	public Boolean isAllDayEvent() {
		return allDayEvent;
	}
	public void setAllDayEvent(Boolean allDayEvent) {
		this.allDayEvent = allDayEvent;
	}
	@Override
	public String toString() {
		return "ScheduleJobs [id=" + id + ", name=" + name + ", description=" + description + ", time=" + time
				+ ", date=" + date + ", repeat=" + repeat + ", daily=" + daily + ", weekly=" + weekly + ", monthly="
				+ monthly + ", yearly=" + yearly + ", monday=" + monday + ", tuesday=" + tuesday + ", wednesday="
				+ wednesday + ", thursday=" + thursday + ", friday=" + friday + ", allDayEvent=" + allDayEvent + "]";
	}
	
	

}
